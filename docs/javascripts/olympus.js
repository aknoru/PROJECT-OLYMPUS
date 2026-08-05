/**
 * PROJECT OLYMPUS — JavaScript Engine v4.0
 * Features: State mgmt, Pomodoro, Command Palette, Live KPIs, Evidence Logger,
 *           Tab Switcher, Non-Negotiables, Weekly chart, Keyboard shortcuts
 */
(() => {
  'use strict';

  /* ─── Constants ──────────────────────────────────────────────── */
  const KEY              = 'olympus-os-v4';
  const MISSION_START    = new Date('2026-08-03T00:00:00');
  const MISSION_END      = new Date('2027-01-31T23:59:59');
  const TOTAL_DAYS       = 184;
  const NON_NEGS         = [
    { id: 'nn1', label: 'Sleep 22:00 → 07:00 (9 hrs)',          tag: '🌙 Foundation' },
    { id: 'nn2', label: 'GATE / ECE Deep Work (2 hrs)',           tag: '📚 Study' },
    { id: 'nn3', label: 'LeetCode / HDLBits (2 problems)',        tag: '💻 Code' },
    { id: 'nn4', label: 'AI / ML Project & Research (1.5 hrs)',   tag: '🤖 AI' },
    { id: 'nn5', label: 'Income Block & Proposals (1.5 hrs)',     tag: '💰 Career' },
    { id: 'nn6', label: 'Exercise & High-Protein Nutrition',      tag: '💪 Health' },
    { id: 'nn7', label: 'Evening Therapy & Journal (45 min)',     tag: '🧠 Mental' },
  ];
  const CMD_ITEMS = [
    { icon: '⚡', name: 'Daily Command Center', path: './', section: 'Navigation' },
    { icon: '🎯', name: '31 Goals & Targets',   path: 'goals/',    section: 'Navigation' },
    { icon: '🗺️', name: 'Master Roadmap',       path: 'roadmap-master/', section: 'Navigation' },
    { icon: '📁', name: 'Projects Database',    path: 'projects/', section: 'Navigation' },
    { icon: '🤖', name: 'AI Prompts Library',   path: 'ai-prompts/', section: 'Navigation' },
    { icon: '📊', name: 'Engineering Dashboard',path: 'engineering-dashboard/', section: 'Dashboards' },
    { icon: '🚀', name: 'Career Dashboard',     path: 'career-dashboard/',     section: 'Dashboards' },
    { icon: '❤️', name: 'Health Dashboard',     path: 'health-dashboard/',     section: 'Dashboards' },
    { icon: '📖', name: 'Learning Dashboard',   path: 'learning-dashboard/',   section: 'Dashboards' },
    { icon: '💰', name: 'Finance Dashboard',    path: 'finance-dashboard/',    section: 'Dashboards' },
    { icon: '🌐', name: 'AI/ML Dashboard',      path: 'ai-dashboard/',         section: 'Dashboards' },
    { icon: '📋', name: 'Weekly Review',        path: 'weekly-review/',        section: 'Reviews' },
    { icon: '📅', name: 'Monthly Review',       path: 'monthly-review/',       section: 'Reviews' },
    { icon: '📖', name: 'User Guide',           path: 'user-guide/',           section: 'Help' },
    { icon: '🗺️', name: 'Repository Map',      path: 'navigation/',           section: 'Help' },
    { icon: '❓', name: 'FAQ',                  path: 'faq/',                  section: 'Help' },
  ];

  /* ─── State ───────────────────────────────────────────────────── */
  const defaultState = () => ({
    mode: 'normal', capacity: 3,
    tasks: [], nonNegs: {}, evidence: [], sessions: [], activity: {},
    targets: { leetcode: 0, hdlbits: 0, gate_pct: 0, weight: 50, income: 0 }
  });

  let S        = defaultState();
  let timerId  = null;
  let timerSec = 25 * 60;
  let timerInit= 25 * 60;
  let timerRunning = false;
  let cmdOpen  = false;
  let cmdSelectedIdx = 0;
  let cmdQuery = '';

  /* ─── Helpers ─────────────────────────────────────────────────── */
  const $  = id  => document.getElementById(id);
  const $$ = sel => document.querySelectorAll(sel);

  const todayKey = () => new Date().toISOString().slice(0, 10);

  const esc = v => String(v).replace(/[&<>"']/g, c => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'
  }[c]));

  const pad = n => String(n).padStart(2, '0');

  const formatTime = sec => `${pad(Math.floor(sec / 60))}:${pad(sec % 60)}`;

  function load() {
    try { S = { ...defaultState(), ...JSON.parse(localStorage.getItem(KEY) || '{}') }; }
    catch { S = defaultState(); }
  }

  function save() {
    localStorage.setItem(KEY, JSON.stringify(S));
    render();
  }

  function markActivity(pts = 1) {
    const k = todayKey();
    S.activity[k] = (S.activity[k] || 0) + pts;
  }

  const todayTasks   = () => S.tasks.filter(t => t.date === todayKey());
  const todayEvidence= () => S.evidence.filter(e => e.date === todayKey());
  const todayMinutes = () => S.sessions.filter(s => s.date === todayKey()).reduce((n, s) => n + s.minutes, 0);
  const todayNNs     = () => S.nonNegs[todayKey()] || {};

  /* ─── Mission Math ────────────────────────────────────────────── */
  function missionData() {
    const now = new Date();
    const elapsed = now - MISSION_START;
    const day = Math.max(1, Math.min(TOTAL_DAYS, Math.floor(elapsed / 86400000) + 1));
    const daysLeft = Math.max(0, Math.ceil((MISSION_END - now) / 86400000));
    const phases = [
      { n: 0, name: 'Stabilize',     start: 1,   end: 7   },
      { n: 1, name: 'Foundations',   start: 8,   end: 28  },
      { n: 2, name: 'Core Engineer', start: 29,  end: 56  },
      { n: 3, name: 'Portfolio',     start: 57,  end: 92  },
      { n: 4, name: 'Market',        start: 93,  end: 138 },
      { n: 5, name: 'Conversion',    start: 139, end: 184 },
    ];
    const phase = phases.find(p => day >= p.start && day <= p.end) || phases[5];
    return { day, daysLeft, phase };
  }

  /* ─── KPI Render ──────────────────────────────────────────────── */
  function renderKPIs() {
    const { day, daysLeft, phase } = missionData();
    const nn  = Object.values(todayNNs()).filter(Boolean).length;
    const mins = todayMinutes();

    set('oa-kpi-day',      day);
    set('oa-kpi-phase',    `Phase ${phase.n}`);
    set('oa-kpi-nn',       `${nn}/7`);
    set('oa-kpi-focus',    `${Math.round(mins/60*10)/10}h`);
    set('oa-kpi-evidence', todayEvidence().length);
    set('oa-kpi-countdown',`${daysLeft}d`);

    // Targets
    set('oa-target-lc',     S.targets.leetcode);
    set('oa-target-hdlbits',S.targets.hdlbits);
    set('oa-target-gate',   `${S.targets.gate_pct}%`);
    set('oa-target-weight', `${S.targets.weight}kg`);
    set('oa-target-income', `₹${(S.targets.income/100000).toFixed(1)}L`);

    // Hero text
    const now = new Date();
    set('oa-hero-date', now.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
    set('oa-hero-time', now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }));
    set('oa-hero-day',  `Day ${day} of ${TOTAL_DAYS}`);
    set('oa-hero-phase',`${phase.name}`);
  }

  function set(id, val) {
    const el = $(id);
    if (el && el.textContent !== String(val)) el.textContent = val;
  }

  /* ─── Non-Negotiables ─────────────────────────────────────────── */
  function renderNNs() {
    const list  = $('oa-nn-list');
    if (!list) return;
    const nns   = todayNNs();
    const done  = Object.values(nns).filter(Boolean).length;

    list.innerHTML = NON_NEGS.map(n => `
      <li class="oa-check-item ${nns[n.id] ? 'is-done' : ''}" data-nn="${n.id}">
        <input class="oa-check-box" type="checkbox" id="${n.id}" ${nns[n.id] ? 'checked' : ''}
               data-nn="${n.id}" aria-label="${esc(n.label)}">
        <span class="oa-check-text">${esc(n.label)}</span>
        <span class="oa-check-tag">${esc(n.tag)}</span>
      </li>`).join('');

    set('oa-nn-count', `${done} / 7`);

    // re-bind
    list.querySelectorAll('input[data-nn]').forEach(cb => {
      cb.addEventListener('change', e => {
        const k = todayKey();
        if (!S.nonNegs[k]) S.nonNegs[k] = {};
        S.nonNegs[k][e.target.dataset.nn] = e.target.checked;
        if (e.target.checked) markActivity(1);
        save();
      });
    });
  }

  /* ─── Tasks ───────────────────────────────────────────────────── */
  function renderTasks() {
    const tasks = todayTasks();
    const done  = tasks.filter(t => t.done).length;
    const list  = $('oa-task-list');
    const empty = $('oa-task-empty');

    if (list) {
      list.innerHTML = tasks.map(t => `
        <li class="oa-check-item ${t.done ? 'is-done' : ''}">
          <input class="oa-check-box" type="checkbox" ${t.done ? 'checked' : ''}
                 data-toggle="${esc(t.id)}" aria-label="${esc(t.text)}">
          <span class="oa-check-text">${esc(t.text)}</span>
          <button class="oa-btn oa-btn-text oa-btn-sm" data-remove="${esc(t.id)}" aria-label="Remove">×</button>
        </li>`).join('');
    }

    if (empty) empty.hidden = tasks.length > 0;
    set('oa-task-count', `${done} / ${tasks.length}`);
    set('oa-task-pct',   tasks.length ? `${Math.round(done/tasks.length*100)}% done` : '');
  }

  /* ─── Evidence ────────────────────────────────────────────────── */
  function renderEvidence() {
    const items = todayEvidence().slice(-6).reverse();
    const list  = $('oa-evidence-list');
    if (!list) return;

    const typeClass = { 'Code': 'ev-code', 'LeetCode': 'ev-problem', 'Research': 'ev-research', 'Proposal': 'ev-proposal', 'Design': 'ev-design' };

    list.innerHTML = items.length ? items.map(it => `
      <div class="oa-evidence-item ${typeClass[it.type] || ''}">
        <div class="oa-evidence-meta">
          <span>${esc(it.type)}</span>
          <span>·</span>
          <time>${esc(it.time)}</time>
        </div>
        <p class="oa-evidence-text">${esc(it.text)}</p>
      </div>`).join('') : '<p class="oa-muted" style="font-size:.82rem;padding:.5rem 0">No evidence logged today. Start building proof.</p>';

    set('oa-evidence-count', todayEvidence().length);
  }

  /* ─── Focus / Deep Work ───────────────────────────────────────── */
  function renderFocus() {
    const mins = todayMinutes();
    set('oa-kpi-focus', `${(mins / 60).toFixed(1)}h`);
  }

  /* ─── Week Activity ───────────────────────────────────────────── */
  function renderWeek() {
    const chart  = $('oa-week-chart');
    const streak = $('oa-streak');
    if (!chart) return;

    const days = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(); d.setDate(d.getDate() - i);
      const key   = d.toISOString().slice(0, 10);
      const today = i === 0;
      days.push({
        label: d.toLocaleDateString('en', { weekday: 'short' }).slice(0, 1),
        value: S.activity[key] || 0,
        today
      });
    }

    const max  = Math.max(1, ...days.map(d => d.value));
    let   str  = 0;
    for (let i = days.length - 1; i >= 0 && days[i].value > 0; i--) str++;

    chart.innerHTML = days.map(d => `
      <div class="oa-week-col">
        <div class="oa-week-bar ${d.value ? 'active' : ''} ${d.today ? 'today' : ''}"
             style="height:${Math.max(6, (d.value / max) * 82)}%"
             title="${d.value} points"></div>
        <span class="oa-week-day ${d.today ? 'today' : ''}">${d.label}</span>
      </div>`).join('');

    if (streak) streak.textContent = `${str} day${str !== 1 ? 's' : ''} streak`;
  }

  /* ─── Adaptive Recommendation ─────────────────────────────────── */
  function renderRecommendation() {
    const el   = $('oa-recommendation');
    const link = $('oa-rec-link');
    if (!el) return;

    const open = todayTasks().filter(t => !t.done);
    const ev   = todayEvidence().length;
    const mode = S.mode;
    const cap  = S.capacity;
    let text, href = 'user-guide/';

    if (mode === 'recovery') {
      text = 'Recovery protocol active. Stop expansion. Protect sleep, calories, and execute Evening Therapy only.';
      href = 'appendices/';
    } else if (mode === 'minimum') {
      text = 'Minimum Viable Day: GATE 25-min, 1 LeetCode, Evening Therapy. Nothing else. Protect the streak.';
      href = 'appendices/';
    } else if (!todayTasks().length && !Object.values(todayNNs()).some(Boolean)) {
      text = cap <= 2
        ? 'Capacity is low. Complete Morning Protocol first — recite the Why Statement and splash cold water.'
        : 'Define one primary technical outcome before opening more documentation.';
    } else if (open.length) {
      text = cap <= 2
        ? `Low energy. Run one 25-min session on "${esc(open[0].text)}" then reassess.`
        : `Begin a deep-work session on "${esc(open[0].text)}". Close all other tabs.`;
    } else if (!ev) {
      text = 'Tasks completed but no evidence logged. Record what changed and how it was verified.';
    } else {
      text = "Today's execution loop is closed. Write tomorrow's 3 outcomes and stop adding scope.";
      href = 'weekly-review/';
    }

    el.textContent = text;
    if (link) link.href = href;
  }

  /* ─── Mode Bar ────────────────────────────────────────────────── */
  function renderMode() {
    $$('.oa-mode-btn').forEach(btn => {
      btn.classList.toggle('is-active', btn.dataset.mode === S.mode);
    });
  }

  /* ─── Pomodoro ────────────────────────────────────────────────── */
  function renderTimer() {
    const disp = $('oa-timer-display');
    const btn  = $('oa-timer-btn');
    if (disp) disp.textContent = formatTime(timerSec);
    if (btn) btn.textContent = timerRunning ? '⏸ Pause' : '▶ Start';
    document.title = timerRunning
      ? `(${formatTime(timerSec)}) Focus · OLYMPUS`
      : 'OLYMPUS · Engineering OS';
  }

  function startTimer() {
    if (timerRunning) return;
    timerRunning = true;
    timerId = setInterval(() => {
      timerSec--;
      if (timerSec <= 0) {
        clearInterval(timerId); timerRunning = false;
        const mins = Math.round(timerInit / 60);
        S.sessions.push({ date: todayKey(), minutes: mins, time: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }) });
        markActivity(3);
        save();
        if (Notification.permission === 'granted') {
          new Notification('Focus session complete!', { body: `${mins} minutes of deep work logged.`, icon: '⚡' });
        }
        alert(`✅ Focus session complete! ${mins} minutes logged.`);
      } else {
        renderTimer();
      }
    }, 1000);
  }

  function pauseTimer() {
    timerRunning = false;
    clearInterval(timerId);
    renderTimer();
  }

  function resetTimer() {
    pauseTimer();
    const sel = $('oa-timer-select');
    const mins = sel ? parseInt(sel.value, 10) : 25;
    timerInit = mins * 60;
    timerSec  = timerInit;
    renderTimer();
  }

  /* ─── Command Palette ─────────────────────────────────────────── */
  function filteredCmds() {
    if (!cmdQuery) return CMD_ITEMS;
    const q = cmdQuery.toLowerCase();
    return CMD_ITEMS.filter(c => c.name.toLowerCase().includes(q) || c.section.toLowerCase().includes(q));
  }

  function renderCmd() {
    const overlay = $('oa-cmd-overlay');
    if (!overlay) return;
    overlay.classList.toggle('is-open', cmdOpen);
    if (!cmdOpen) return;

    const items = filteredCmds();
    const list  = $('oa-cmd-results');
    if (!list) return;

    const sections = [...new Set(items.map(i => i.section))];
    list.innerHTML = sections.map(sec => `
      <div class="oa-cmd-section-label">${esc(sec)}</div>
      ${items.filter(i => i.section === sec).map((item, idx) => `
        <a href="${esc(item.path)}" class="oa-cmd-result ${idx === cmdSelectedIdx ? 'is-selected' : ''}">
          <span class="oa-cmd-result-icon">${item.icon}</span>
          <span class="oa-cmd-result-name">${esc(item.name)}</span>
        </a>`).join('')}
    `).join('');
  }

  function openCmd() {
    cmdOpen = true; cmdQuery = ''; cmdSelectedIdx = 0;
    renderCmd();
    const inp = $('oa-cmd-input');
    if (inp) { inp.value = ''; setTimeout(() => inp.focus(), 50); }
  }
  function closeCmd() {
    cmdOpen = false;
    renderCmd();
  }

  /* ─── Tabs ────────────────────────────────────────────────────── */
  function initTabs() {
    $$('.oa-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.tab;
        $$('.oa-tab').forEach(b => b.classList.toggle('is-active', b.dataset.tab === target));
        $$('.oa-tab-content').forEach(c => c.classList.toggle('is-active', c.id === target));
      });
    });
  }

  /* ─── Targets Input ───────────────────────────────────────────── */
  function initTargetInputs() {
    const fields = ['lc', 'hdlbits', 'gate_pct', 'weight', 'income'];
    fields.forEach(f => {
      const inp = $(`oa-inp-${f}`);
      if (!inp) return;
      inp.value = S.targets[f === 'lc' ? 'leetcode' : f] || 0;
      inp.addEventListener('change', () => {
        const key = f === 'lc' ? 'leetcode' : f;
        S.targets[key] = parseFloat(inp.value) || 0;
        save();
      });
    });
  }

  /* ─── Event Bindings ──────────────────────────────────────────── */
  function bindEvents() {
    // Mode buttons
    $$('.oa-mode-btn').forEach(btn => {
      btn.addEventListener('click', () => { S.mode = btn.dataset.mode; save(); });
    });

    // Task form
    const taskForm = $('oa-task-form');
    if (taskForm) {
      taskForm.addEventListener('submit', e => {
        e.preventDefault();
        const inp  = $('oa-task-input');
        const text = inp?.value.trim();
        if (!text) return;
        S.tasks.push({ id: Date.now().toString(), text, done: false, date: todayKey() });
        if (inp) inp.value = '';
        markActivity(1);
        save();
      });
    }

    // Task list delegation
    const taskList = $('oa-task-list');
    if (taskList) {
      taskList.addEventListener('change', e => {
        if (!e.target.dataset.toggle) return;
        const t = S.tasks.find(t => t.id === e.target.dataset.toggle);
        if (!t) return;
        t.done = e.target.checked;
        if (t.done) markActivity(2);
        save();
      });
      taskList.addEventListener('click', e => {
        if (!e.target.dataset.remove) return;
        S.tasks = S.tasks.filter(t => t.id !== e.target.dataset.remove);
        save();
      });
    }

    // Pomodoro
    const timerBtn    = $('oa-timer-btn');
    const timerReset  = $('oa-timer-reset');
    const timerSelect = $('oa-timer-select');

    if (timerBtn)    timerBtn.addEventListener('click', () => timerRunning ? pauseTimer() : startTimer());
    if (timerReset)  timerReset.addEventListener('click', resetTimer);
    if (timerSelect) timerSelect.addEventListener('change', resetTimer);

    // Evidence form
    const evForm = $('oa-evidence-form');
    if (evForm) {
      evForm.addEventListener('submit', e => {
        e.preventDefault();
        const inp  = $('oa-evidence-input');
        const type = $('oa-evidence-type');
        const text = inp?.value.trim();
        if (!text) return;
        S.evidence.push({
          id: Date.now().toString(), text, date: todayKey(),
          type: type?.value || 'Code',
          time: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })
        });
        if (inp) inp.value = '';
        markActivity(3);
        save();
      });
    }

    // Capacity slider
    const capSlider = $('oa-capacity');
    if (capSlider) {
      capSlider.addEventListener('input', e => {
        S.capacity = parseInt(e.target.value, 10);
        set('oa-cap-value', `${S.capacity} / 5`);
        renderRecommendation();
        localStorage.setItem(KEY, JSON.stringify(S));
      });
    }

    // Export
    const exp = $('oa-export-btn');
    if (exp) {
      exp.addEventListener('click', () => {
        const blob = new Blob([JSON.stringify(S, null, 2)], { type: 'application/json' });
        const url  = URL.createObjectURL(blob);
        const a    = document.createElement('a');
        a.href = url; a.download = `olympus-backup-${todayKey()}.json`; a.click();
        URL.revokeObjectURL(url);
      });
    }

    // Import
    const imp = $('oa-import-file');
    if (imp) {
      imp.addEventListener('change', e => {
        const file = e.target.files[0]; if (!file) return;
        const reader = new FileReader();
        reader.onload = ev => {
          try { S = { ...defaultState(), ...JSON.parse(ev.target.result) }; save(); alert('Data imported!'); }
          catch { alert('Import failed — invalid JSON.'); }
        };
        reader.readAsText(file);
      });
    }

    // Clear
    const clr = $('oa-clear-btn');
    if (clr) {
      clr.addEventListener('click', () => {
        if (confirm('Clear ALL local data? This cannot be undone.')) { S = defaultState(); save(); }
      });
    }

    // Command Palette trigger buttons
    $$('[data-cmd-open]').forEach(btn => btn.addEventListener('click', openCmd));

    // Command palette input
    const cmdInp = $('oa-cmd-input');
    if (cmdInp) {
      cmdInp.addEventListener('input', e => {
        cmdQuery = e.target.value; cmdSelectedIdx = 0; renderCmd();
      });
      cmdInp.addEventListener('keydown', e => {
        const items = filteredCmds();
        if (e.key === 'ArrowDown') { cmdSelectedIdx = (cmdSelectedIdx + 1) % items.length; renderCmd(); e.preventDefault(); }
        if (e.key === 'ArrowUp')   { cmdSelectedIdx = (cmdSelectedIdx - 1 + items.length) % items.length; renderCmd(); e.preventDefault(); }
        if (e.key === 'Enter') {
          const item = items[cmdSelectedIdx];
          if (item) { window.location.href = item.path; closeCmd(); }
        }
        if (e.key === 'Escape') closeCmd();
      });
    }

    // Overlay click to close
    const overlay = $('oa-cmd-overlay');
    if (overlay) overlay.addEventListener('click', e => { if (e.target === overlay) closeCmd(); });

    // Global keyboard shortcuts
    document.addEventListener('keydown', e => {
      // Ctrl+K / Cmd+K → command palette
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        cmdOpen ? closeCmd() : openCmd();
      }
      // Escape to close
      if (e.key === 'Escape' && cmdOpen) closeCmd();
    });
  }

  /* ─── Notification Permission ─────────────────────────────────── */
  function requestNotif() {
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }

  /* ─── Master Render ───────────────────────────────────────────── */
  function render() {
    renderKPIs();
    renderNNs();
    renderTasks();
    renderEvidence();
    renderFocus();
    renderWeek();
    renderRecommendation();
    renderMode();
    renderTimer();

    const capVal = $('oa-cap-value');
    const capInp = $('oa-capacity');
    if (capVal) capVal.textContent = `${S.capacity} / 5`;
    if (capInp) capInp.value = S.capacity;
  }

  /* ─── Init ────────────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    load();
    resetTimer();
    initTabs();
    initTargetInputs();
    bindEvents();
    render();
    requestNotif();

    // Refresh header time every 30s
    setInterval(() => {
      const now = new Date();
      set('oa-hero-time', now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }));
    }, 30000);
  });

})();
