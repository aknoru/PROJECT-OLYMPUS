(() => {
  const KEY = "project-olympus-v2";
  const defaultState = () => ({
    mode: "normal", capacity: 3, tasks: [], evidence: [], sessions: [], activity: {}
  });
  let state = defaultState();
  let catalog = [];
  let timerId = null;
  let remaining = 25 * 60;
  let timerRunning = false;

  const $ = (id) => document.getElementById(id);
  const todayKey = () => new Date().toISOString().slice(0, 10);
  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[c]));

  function load() {
    try { state = { ...defaultState(), ...JSON.parse(localStorage.getItem(KEY) || "{}") }; }
    catch { state = defaultState(); }
  }
  function save() {
    localStorage.setItem(KEY, JSON.stringify(state));
    render();
  }
  function markActivity(points = 1) {
    state.activity[todayKey()] = (state.activity[todayKey()] || 0) + points;
  }
  function todayTasks() { return state.tasks.filter(t => t.date === todayKey()); }
  function todayEvidence() { return state.evidence.filter(e => e.date === todayKey()); }
  function todayMinutes() {
    return state.sessions.filter(s => s.date === todayKey()).reduce((n, s) => n + s.minutes, 0);
  }

  function renderTasks() {
    const tasks = todayTasks();
    $("oa-task-list").innerHTML = tasks.map(task => `
      <li class="oa-task ${task.done ? "is-done" : ""}">
        <input type="checkbox" data-task-toggle="${task.id}" ${task.done ? "checked" : ""} aria-label="Complete ${escapeHtml(task.text)}">
        <span>${escapeHtml(task.text)}</span>
        <button type="button" class="oa-remove" data-task-remove="${task.id}" aria-label="Remove task">×</button>
      </li>`).join("");
    $("oa-empty-plan").hidden = tasks.length > 0;
    $("oa-plan-counter").textContent = `${tasks.length} / 3`;
    $("oa-completed").textContent = tasks.filter(t => t.done).length;
  }

  function renderEvidence() {
    const items = todayEvidence().slice(-3).reverse();
    $("oa-evidence-total").textContent = todayEvidence().length;
    $("oa-evidence-list").innerHTML = items.map(item => `
      <article class="oa-evidence-item">
        <strong>${escapeHtml(item.type)}</strong> · <time>${escapeHtml(item.time)}</time>
        <p>${escapeHtml(item.text)}</p>
      </article>`).join("");
  }

  function renderWeek() {
    const days = [];
    let streak = 0;
    for (let i = 6; i >= 0; i--) {
      const d = new Date(); d.setDate(d.getDate() - i);
      const key = d.toISOString().slice(0, 10);
      days.push({ label: d.toLocaleDateString(undefined, { weekday: "short" }).slice(0, 1), value: state.activity[key] || 0 });
    }
    for (let i = days.length - 1; i >= 0 && days[i].value > 0; i--) streak++;
    const max = Math.max(1, ...days.map(d => d.value));
    $("oa-week-chart").innerHTML = days.map(d => `
      <div class="oa-day ${d.value ? "is-active" : ""}">
        <div class="oa-day-bar" style="height:${Math.max(4, (d.value / max) * 82)}%" title="${d.value} activity points"></div>
        <span>${d.label}</span>
      </div>`).join("");
    $("oa-streak").textContent = `${streak} day${streak === 1 ? "" : "s"} streak`;
  }

  function recommendation() {
    const open = todayTasks().filter(t => !t.done);
    const completed = todayTasks().filter(t => t.done).length;
    const evidence = todayEvidence().length;
    const mode = state.mode;
    let text, link = "quickstart/";
    if (mode === "recovery") {
      text = "Stop expansion. Protect essentials, reduce commitments, and follow the recovery protocol.";
      link = "appendices/#recovery-route";
    } else if (!open.length && !completed) {
      text = state.capacity <= 2
        ? "Choose one minimum viable outcome that can be verified in a short focused block."
        : "Define one primary technical outcome before opening more documentation.";
    } else if (open.length) {
      text = state.capacity <= 2
        ? `Work only on “${open[0].text}” for 25 minutes, then reassess capacity.`
        : `Begin a focused session on “${open[0].text}”. Do not add another outcome yet.`;
    } else if (!evidence) {
      text = "Execution is marked complete, but evidence is missing. Record what changed and how it was verified.";
    } else {
      text = "Today’s loop is closed. Preserve the next action and stop before unnecessary repository work.";
      link = "lifecycle/";
    }
    $("oa-recommendation").textContent = text;
    $("oa-recommendation-link").href = link;
  }

  function renderMode() {
    document.querySelectorAll(".oa-mode").forEach(btn =>
      btn.classList.toggle("is-active", btn.dataset.mode === state.mode));
    const notes = {
      normal: "Protect one meaningful outcome.",
      minimum: "Continuity over volume.",
      recovery: "Stabilize before accelerating."
    };
    $("oa-mode-note").textContent = notes[state.mode];
  }

  function render() {
    if (!$("olympus-app")) return;
    renderTasks(); renderEvidence(); renderWeek(); renderMode(); recommendation();
    $("oa-focus-total").textContent = `${todayMinutes()}m`;
    $("oa-capacity").value = state.capacity;
    $("oa-capacity-value").textContent = `${state.capacity} / 5`;
  }

  function renderTimer() {
    const minutes = Math.floor(remaining / 60).toString().padStart(2, "0");
    const seconds = (remaining % 60).toString().padStart(2, "0");
    $("oa-timer").textContent = `${minutes}:${seconds}`;
    $("oa-timer-toggle").textContent = timerRunning ? "Pause" : (remaining ? "Start focus" : "Complete");
    document.title = timerRunning ? `${minutes}:${seconds} · Olympus` : "Olympus Command Center";
  }

  function finishSession() {
    timerRunning = false; clearInterval(timerId);
    const minutes = Number($("oa-focus-length").value);
    state.sessions.push({ date: todayKey(), minutes, completedAt: new Date().toISOString() });
    markActivity(2); save();
    $("oa-focus-prompt").textContent = "Session complete. Capture evidence before starting another.";
    remaining = minutes * 60; renderTimer();
  }

  async function connectRepository() {
    const healthUrl = "https://raw.githubusercontent.com/aknoru/PROJECT-OLYMPUS/main/data/generated/repository-health.json";
    const catalogUrl = "https://raw.githubusercontent.com/aknoru/PROJECT-OLYMPUS/main/data/generated/content-catalog.json";
    try {
      const [healthRes, catalogRes] = await Promise.all([fetch(healthUrl), fetch(catalogUrl)]);
      if (!healthRes.ok || !catalogRes.ok) throw new Error("Repository unavailable");
      const health = await healthRes.json();
      const content = await catalogRes.json();
      catalog = content.items || [];
      $("oa-health").textContent = health.status === "healthy" ? "Healthy" : "Review";
      $("oa-health-detail").textContent = `${health.statistics?.markdown_files || catalog.length} documents`;
      $("oa-sync-label").textContent = "Repository connected";
      $("oa-sync-dot").classList.add("is-live");
    } catch {
      $("oa-health").textContent = "Offline";
      $("oa-health-detail").textContent = "local mode";
      $("oa-sync-label").textContent = "Local mode";
    }
  }

  function searchCatalog(query) {
    const box = $("oa-search-results");
    const q = query.trim().toLowerCase();
    if (q.length < 2) {
      box.innerHTML = "<p>Search by title, type, status, or path.</p>"; return;
    }
    const matches = catalog.filter(item =>
      [item.title, item.type, item.status, item.path].some(v => String(v || "").toLowerCase().includes(q))
    ).slice(0, 8);
    box.innerHTML = matches.length ? matches.map(item => {
      const url = `https://github.com/aknoru/PROJECT-OLYMPUS/blob/main/${encodeURI(item.path)}`;
      return `<a class="oa-search-result" href="${url}" target="_blank" rel="noopener">
        <strong>${escapeHtml(item.title || item.path)}</strong>
        <span>${escapeHtml(item.type || "document")} · ${escapeHtml(item.path)}</span>
      </a>`;
    }).join("") : "<p>No matching documents.</p>";
  }

  function bind() {
    $("oa-date").textContent = new Intl.DateTimeFormat(undefined, {
      weekday: "long", day: "numeric", month: "long", year: "numeric"
    }).format(new Date());
    const hour = new Date().getHours();
    $("oa-greeting").textContent = hour < 12 ? "Good morning. Build capability." :
      hour < 18 ? "Make the next block count." : "Close the loop. Preserve evidence.";

    $("oa-task-form").addEventListener("submit", e => {
      e.preventDefault();
      const input = $("oa-task-input");
      if (todayTasks().length >= 3) {
        input.setCustomValidity("Keep work in progress to three outcomes."); input.reportValidity();
        setTimeout(() => input.setCustomValidity(""), 1500); return;
      }
      state.tasks.push({ id: crypto.randomUUID(), text: input.value.trim(), done: false, date: todayKey() });
      markActivity(); input.value = ""; save();
    });
    $("oa-task-list").addEventListener("click", e => {
      const toggle = e.target.dataset.taskToggle;
      const remove = e.target.dataset.taskRemove;
      if (toggle) {
        const task = state.tasks.find(t => t.id === toggle);
        task.done = e.target.checked; if (task.done) markActivity(2); save();
      }
      if (remove) { state.tasks = state.tasks.filter(t => t.id !== remove); save(); }
    });
    document.querySelectorAll(".oa-mode").forEach(btn => btn.addEventListener("click", () => {
      state.mode = btn.dataset.mode;
      if (state.mode === "minimum") state.capacity = Math.min(state.capacity, 2);
      if (state.mode === "recovery") state.capacity = 1;
      save();
    }));
    $("oa-capacity").addEventListener("input", e => { state.capacity = Number(e.target.value); save(); });
    $("oa-evidence-form").addEventListener("submit", e => {
      e.preventDefault();
      const input = $("oa-evidence-input");
      state.evidence.push({
        id: crypto.randomUUID(), date: todayKey(),
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        type: $("oa-evidence-type").value, text: input.value.trim()
      });
      markActivity(2); input.value = ""; save();
    });
    $("oa-focus-length").addEventListener("change", e => {
      if (!timerRunning) { remaining = Number(e.target.value) * 60; renderTimer(); }
    });
    $("oa-timer-toggle").addEventListener("click", () => {
      if (timerRunning) { timerRunning = false; clearInterval(timerId); renderTimer(); return; }
      if (remaining <= 0) { finishSession(); return; }
      timerRunning = true; renderTimer();
      timerId = setInterval(() => { remaining--; renderTimer(); if (remaining <= 0) finishSession(); }, 1000);
    });
    $("oa-timer-reset").addEventListener("click", () => {
      timerRunning = false; clearInterval(timerId);
      remaining = Number($("oa-focus-length").value) * 60; renderTimer();
    });
    $("oa-knowledge-search").addEventListener("input", e => searchCatalog(e.target.value));
    $("oa-export").addEventListener("click", () => {
      const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
      const a = document.createElement("a"); a.href = URL.createObjectURL(blob);
      a.download = `olympus-data-${todayKey()}.json`; a.click(); URL.revokeObjectURL(a.href);
    });
    $("oa-import").addEventListener("change", async e => {
      try { state = { ...defaultState(), ...JSON.parse(await e.target.files[0].text()) }; save(); }
      catch { alert("This file is not a valid Olympus data export."); }
      e.target.value = "";
    });
    $("oa-clear").addEventListener("click", () => {
      if (confirm("Clear all locally stored Olympus tasks, sessions, and evidence?")) {
        localStorage.removeItem(KEY); state = defaultState(); save();
      }
    });
  }

  function init() {
    if (!$("olympus-app") || $("olympus-app").dataset.ready) return;
    $("olympus-app").dataset.ready = "true";
    load(); bind(); render(); renderTimer(); connectRepository();
  }
  if (typeof document$ !== "undefined") document$.subscribe(init);
  else document.addEventListener("DOMContentLoaded", init);
})();

