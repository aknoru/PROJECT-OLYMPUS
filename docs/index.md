---
id: OLYMPUS-COMMAND-CENTER
title: "OLYMPUS · Engineering OS"
type: executive-dashboard
status: active
version: 4.0.0
---

# OLYMPUS Command Center

<!-- COMMAND PALETTE OVERLAY -->
<div id="oa-cmd-overlay" class="oa-cmd-overlay" role="dialog" aria-label="Command palette" aria-modal="true">
  <div class="oa-cmd-box">
    <div class="oa-cmd-input-row">
      <span class="oa-cmd-icon">⌘</span>
      <input id="oa-cmd-input" class="oa-cmd-input" type="text" placeholder="Search pages, dashboards, protocols…" autocomplete="off" spellcheck="false">
      <span class="oa-cmd-kbd">ESC</span>
    </div>
    <div id="oa-cmd-results" class="oa-cmd-results"></div>
    <div class="oa-cmd-footer">
      <span class="oa-cmd-shortcut"><kbd>↑↓</kbd> navigate</span>
      <span class="oa-cmd-shortcut"><kbd>↵</kbd> open</span>
      <span class="oa-cmd-shortcut"><kbd>Esc</kbd> close</span>
      <span class="oa-cmd-shortcut" style="margin-left:auto"><kbd>Ctrl</kbd><kbd>K</kbd> toggle</span>
    </div>
  </div>
</div>

<div class="oa-shell">

<!-- ═══════════════════════════════════════════════════════════════
     HERO SECTION
═══════════════════════════════════════════════════════════════════ -->
<section class="oa-hero">
  <div class="oa-hero-left">
    <p class="oa-eyebrow">PROJECT OLYMPUS · OPERATION RENAISSANCE · 184-DAY CAMPAIGN</p>
    <h1>Engineering<br><span class="oa-accent-text">Operating System</span></h1>
    <p class="oa-hero-sub" id="oa-hero-date">Loading mission clock…</p>
  </div>
  <div class="oa-hero-right">
    <div class="oa-hero-badge">
      <span class="oa-live-dot"></span>
      <span id="oa-hero-day">Day — of 184</span>
    </div>
    <div class="oa-hero-badge">
      ⚡ <span id="oa-hero-phase">Phase —</span>
    </div>
    <div class="oa-hero-badge">
      🕐 <span id="oa-hero-time">—:—</span>
    </div>
    <button class="oa-hero-badge" style="border:none;cursor:pointer;background:rgba(99,102,241,0.20);color:#818cf8" data-cmd-open>
      ⌘ &nbsp;Search &amp; Navigate
    </button>
  </div>
</section>

<!-- ═══════════════════════════════════════════════════════════════
     KPI ROW
═══════════════════════════════════════════════════════════════════ -->
<div class="oa-kpi-row">
  <div class="oa-kpi oa-kpi-accent">
    <div class="oa-kpi-label">Mission Day</div>
    <span class="oa-kpi-value" id="oa-kpi-day">—</span>
    <div class="oa-kpi-sub">of 184 total</div>
  </div>
  <div class="oa-kpi oa-kpi-teal">
    <div class="oa-kpi-label">Non-Negotiables</div>
    <span class="oa-kpi-value" id="oa-kpi-nn">0/7</span>
    <div class="oa-kpi-sub">today's foundation</div>
  </div>
  <div class="oa-kpi oa-kpi-emerald">
    <div class="oa-kpi-label">Deep Work</div>
    <span class="oa-kpi-value" id="oa-kpi-focus">0h</span>
    <div class="oa-kpi-sub">focus logged today</div>
  </div>
  <div class="oa-kpi oa-kpi-amber">
    <div class="oa-kpi-label">Evidence</div>
    <span class="oa-kpi-value" id="oa-kpi-evidence">0</span>
    <div class="oa-kpi-sub">artifacts saved</div>
  </div>
  <div class="oa-kpi oa-kpi-warm">
    <div class="oa-kpi-label">Countdown</div>
    <span class="oa-kpi-value" id="oa-kpi-countdown">—d</span>
    <div class="oa-kpi-sub">until Jan 31, 2027</div>
  </div>
</div>

<!-- ═══════════════════════════════════════════════════════════════
     OPERATING MODE STRIP
═══════════════════════════════════════════════════════════════════ -->
<div class="oa-row" style="gap:0.5rem;margin:0.25rem 0 1rem">
  <span style="font-size:0.78rem;font-weight:700;color:var(--oa-text-3);letter-spacing:0.05em">MODE:</span>
  <button class="oa-btn oa-btn-sm oa-mode-btn" data-mode="normal"  >⚡ Normal</button>
  <button class="oa-btn oa-btn-sm oa-mode-btn" data-mode="minimum" >🛡 Minimum Viable Day</button>
  <button class="oa-btn oa-btn-sm oa-mode-btn" data-mode="recovery">❤️ Recovery</button>
  <span class="oa-spacer"></span>
  <button class="oa-btn oa-btn-sm oa-btn-ghost" data-cmd-open>⌘K &nbsp;Command</button>
</div>

<!-- ═══════════════════════════════════════════════════════════════
     TABS
═══════════════════════════════════════════════════════════════════ -->
<div class="oa-tabs" role="tablist">
  <button class="oa-tab is-active" data-tab="tab-daily"   role="tab"><span class="oa-tab-icon">⚡</span>Daily Loop</button>
  <button class="oa-tab" data-tab="tab-goals"   role="tab"><span class="oa-tab-icon">🎯</span>Goals &amp; Targets</button>
  <button class="oa-tab" data-tab="tab-phase"   role="tab"><span class="oa-tab-icon">🗺️</span>Phase Roadmap</button>
  <button class="oa-tab" data-tab="tab-dash"    role="tab"><span class="oa-tab-icon">📊</span>Dashboards</button>
  <button class="oa-tab" data-tab="tab-launch"  role="tab"><span class="oa-tab-icon">🚀</span>Quick Launch</button>
</div>

<!-- ═══════════════════════════════════════════════════════════════
     TAB 1 — DAILY COMMAND CENTER
═══════════════════════════════════════════════════════════════════ -->
<div id="tab-daily" class="oa-tab-content is-active">
  <div class="oa-grid-main" style="gap:1rem">

    <!-- LEFT COLUMN -->
    <div class="oa-stack">

      <!-- 7 NON-NEGOTIABLES -->
      <div class="oa-card">
        <div class="oa-card-header">
          <div>
            <p class="oa-label">DAILY FOUNDATION</p>
            <p class="oa-title">The 7 Non-Negotiables</p>
          </div>
          <span class="oa-badge oa-badge-accent" id="oa-nn-count">0 / 7</span>
        </div>
        <ul class="oa-checklist" id="oa-nn-list">
          <!-- Rendered by JS -->
        </ul>
      </div>

      <!-- CUSTOM OUTCOMES -->
      <div class="oa-card">
        <div class="oa-card-header">
          <div>
            <p class="oa-label">OUTCOME ENGINE</p>
            <p class="oa-title">Today's Verifiable Outcomes</p>
          </div>
          <span class="oa-badge oa-badge-teal" id="oa-task-count">0 / 0</span>
        </div>
        <form id="oa-task-form" class="oa-task-form">
          <label class="sr-only" for="oa-task-input">Add outcome</label>
          <input id="oa-task-input" class="oa-input" maxlength="140"
                 placeholder="Define a verifiable engineering outcome…" required>
          <button type="submit" class="oa-btn oa-btn-primary">Add</button>
        </form>
        <ul class="oa-checklist oa-mt-1" id="oa-task-list"></ul>
        <div id="oa-task-empty" class="oa-muted" style="font-size:.82rem;padding:.75rem 0;text-align:center">
          No outcomes yet. Choose the smallest result that makes today count.
        </div>
      </div>

      <!-- PROOF OF WORK -->
      <div class="oa-card">
        <div class="oa-card-header">
          <div>
            <p class="oa-label">PROOF OF WORK</p>
            <p class="oa-title">Evidence Capture</p>
          </div>
          <div class="oa-row oa-gap-05">
            <span class="oa-badge oa-badge-emerald" id="oa-evidence-count">0 logged</span>
            <button class="oa-btn oa-btn-text oa-btn-sm" id="oa-export-btn">Export</button>
          </div>
        </div>
        <form id="oa-evidence-form">
          <label class="oa-label oa-mb-05" for="oa-evidence-input">What changed? How was it verified?</label>
          <textarea id="oa-evidence-input" class="oa-textarea" rows="2" maxlength="600"
                    placeholder="E.g. Implemented UART RX; simulation passes framing + overflow cases. Commit: abc1234" required></textarea>
          <div class="oa-row" style="margin-top:.5rem;justify-content:flex-end">
            <select id="oa-evidence-type" class="oa-select" style="width:auto;padding:.4rem .7rem;font-size:.8rem">
              <option>Code</option>
              <option>LeetCode</option>
              <option>RTL / Verilog</option>
              <option>Research</option>
              <option>Proposal</option>
              <option>Design</option>
              <option>Review</option>
            </select>
            <button type="submit" class="oa-btn oa-btn-primary oa-btn-sm">Save Evidence</button>
          </div>
        </form>
        <div id="oa-evidence-list" class="oa-evidence-list"></div>
      </div>

    </div>

    <!-- RIGHT COLUMN -->
    <div class="oa-stack">

      <!-- DEEP WORK TIMER -->
      <div class="oa-card oa-card-glow-accent">
        <div class="oa-card-header">
          <div>
            <p class="oa-label">COGNITIVE ENGINE</p>
            <p class="oa-title">Deep-Work Pomodoro</p>
          </div>
          <select id="oa-timer-select" class="oa-select" style="width:auto;padding:.3rem .6rem;font-size:.78rem">
            <option value="25">25 min</option>
            <option value="50">50 min</option>
            <option value="90">90 min</option>
          </select>
        </div>
        <div class="oa-timer-wrap">
          <div class="oa-timer-display" id="oa-timer-display">25:00</div>
          <p class="oa-timer-label">Select outcome → remove distractions → begin</p>
          <div class="oa-timer-btns">
            <button class="oa-btn oa-btn-primary" id="oa-timer-btn">▶ Start</button>
            <button class="oa-btn oa-btn-ghost" id="oa-timer-reset">↺ Reset</button>
          </div>
        </div>
      </div>

      <!-- ADAPTIVE GUIDANCE -->
      <div class="oa-card oa-guidance">
        <p class="oa-label">ADAPTIVE GUIDANCE</p>
        <p class="oa-title" style="margin-top:.3rem">Next Best Action</p>
        <p class="oa-guidance-text" id="oa-recommendation">Assessing your state…</p>
        <div class="oa-capacity-row">
          <span>Capacity Today</span>
          <strong id="oa-cap-value">3 / 5</strong>
        </div>
        <input id="oa-capacity" class="oa-capacity-input" type="range" min="1" max="5" value="3">
        <div style="margin-top:.75rem">
          <a class="oa-guidance-link" id="oa-rec-link" href="user-guide/">Open User Guide →</a>
        </div>
      </div>

      <!-- EXECUTION RHYTHM (Week Chart) -->
      <div class="oa-card">
        <div class="oa-card-header">
          <div>
            <p class="oa-label">LAST 7 DAYS</p>
            <p class="oa-title">Execution Rhythm</p>
          </div>
          <span class="oa-badge oa-badge-teal" id="oa-streak">0 days</span>
        </div>
        <div id="oa-week-chart" class="oa-week-chart"></div>
      </div>

      <!-- LIVE TARGETS -->
      <div class="oa-card">
        <div class="oa-card-header">
          <div>
            <p class="oa-label">MISSION TARGETS</p>
            <p class="oa-title">Update Your Progress</p>
          </div>
        </div>
        <div class="oa-stack" style="gap:.6rem">
          <div class="oa-row-sb" style="font-size:.82rem">
            <span class="oa-muted">LeetCode Solved</span>
            <div class="oa-row oa-gap-05">
              <input id="oa-inp-lc" type="number" min="0" max="9999" class="oa-input" style="width:5rem;padding:.3rem .5rem;text-align:center;font-size:.82rem">
              <span class="oa-muted">/ 200+</span>
            </div>
          </div>
          <div class="oa-row-sb" style="font-size:.82rem">
            <span class="oa-muted">HDLBits Solved</span>
            <div class="oa-row oa-gap-05">
              <input id="oa-inp-hdlbits" type="number" min="0" max="9999" class="oa-input" style="width:5rem;padding:.3rem .5rem;text-align:center;font-size:.82rem">
              <span class="oa-muted">/ 100+</span>
            </div>
          </div>
          <div class="oa-row-sb" style="font-size:.82rem">
            <span class="oa-muted">GATE Syllabus %</span>
            <div class="oa-row oa-gap-05">
              <input id="oa-inp-gate_pct" type="number" min="0" max="100" class="oa-input" style="width:5rem;padding:.3rem .5rem;text-align:center;font-size:.82rem">
              <span class="oa-muted">/ 100%</span>
            </div>
          </div>
          <div class="oa-row-sb" style="font-size:.82rem">
            <span class="oa-muted">Body Weight (kg)</span>
            <div class="oa-row oa-gap-05">
              <input id="oa-inp-weight" type="number" min="40" max="120" class="oa-input" style="width:5rem;padding:.3rem .5rem;text-align:center;font-size:.82rem">
              <span class="oa-muted">→ 65–70</span>
            </div>
          </div>
          <div class="oa-row-sb" style="font-size:.82rem">
            <span class="oa-muted">Income Earned (₹)</span>
            <div class="oa-row oa-gap-05">
              <input id="oa-inp-income" type="number" min="0" class="oa-input" style="width:6rem;padding:.3rem .5rem;text-align:center;font-size:.82rem">
              <span class="oa-muted">/ 6,00,000</span>
            </div>
          </div>
        </div>
      </div>

      <!-- DATA CONTROL -->
      <div class="oa-card">
        <p class="oa-label">DATA CONTROL</p>
        <p class="oa-title" style="margin:.25rem 0 .5rem">Local & Private</p>
        <p style="font-size:.78rem;color:var(--oa-text-3);margin-bottom:.75rem">All data stays in your browser. Export for backup or cross-device transfer.</p>
        <div class="oa-row">
          <label class="oa-btn oa-btn-ghost oa-btn-sm" style="cursor:pointer">
            📥 Import <input id="oa-import-file" type="file" accept=".json" style="display:none">
          </label>
          <button class="oa-btn oa-btn-danger oa-btn-sm" id="oa-clear-btn">🗑 Clear</button>
        </div>
      </div>

    </div>
  </div>
</div>

<!-- ═══════════════════════════════════════════════════════════════
     TAB 2 — GOALS & TARGETS
═══════════════════════════════════════════════════════════════════ -->
<div id="tab-goals" class="oa-tab-content">
  <div class="oa-card" style="margin-bottom:1rem">
    <div class="oa-card-header">
      <div>
        <p class="oa-label">MISSION CONTROL</p>
        <p class="oa-title">The 31 Goals — Master Target Matrix</p>
      </div>
      <a href="goals/" class="oa-btn oa-btn-ghost oa-btn-sm">Full View →</a>
    </div>
    <div class="oa-goals-grid">
      <div class="oa-goal-card">
        <div class="oa-goal-num">GOAL-01 · Career</div>
        <div class="oa-goal-name">Paid Internship</div>
        <div class="oa-goal-desc">₹50,000–55,000/month in FPGA, RTL, ASIC, or Edge AI domain.</div>
        <div class="oa-goal-meta"><span class="oa-badge oa-badge-accent">High Priority</span><span class="oa-badge oa-badge-gray">Phase 3–4</span></div>
      </div>
      <div class="oa-goal-card">
        <div class="oa-goal-num">GOAL-02 · Career</div>
        <div class="oa-goal-name">Dream Placement</div>
        <div class="oa-goal-desc">₹45–50+ LPA package. Acceptable: ₹20–25 LPA.</div>
        <div class="oa-goal-meta"><span class="oa-badge oa-badge-accent">Critical</span><span class="oa-badge oa-badge-gray">Phase 4–5</span></div>
      </div>
      <div class="oa-goal-card">
        <div class="oa-goal-num">GOAL-04 · Finance</div>
        <div class="oa-goal-name">₹6L Target Income</div>
        <div class="oa-goal-desc">6-month total earnings. Scale to ₹2,00,000/month long-term.</div>
        <div class="oa-goal-meta"><span class="oa-badge oa-badge-amber">Finance</span><span class="oa-badge oa-badge-gray">All Phases</span></div>
      </div>
      <div class="oa-goal-card">
        <div class="oa-goal-num">GOAL-07 · Technical</div>
        <div class="oa-goal-name">Electronics Mastery</div>
        <div class="oa-goal-desc">Digital/Analog, Verilog/VHDL, FPGA, RTL, ARM, VLSI, ASIC design.</div>
        <div class="oa-goal-meta"><span class="oa-badge oa-badge-teal">Engineering</span></div>
      </div>
      <div class="oa-goal-card">
        <div class="oa-goal-num">GOAL-08 · Technical</div>
        <div class="oa-goal-name">CS Mastery</div>
        <div class="oa-goal-desc">C++, Python, Linux, Git, DSA, OS, Networks, DevOps, AI/ML.</div>
        <div class="oa-goal-meta"><span class="oa-badge oa-badge-teal">Engineering</span></div>
      </div>
      <div class="oa-goal-card">
        <div class="oa-goal-num">GOAL-09 · Coding</div>
        <div class="oa-goal-name">Coding Targets</div>
        <div class="oa-goal-desc">LeetCode 200+, HDLBits 100+, Codeforces 1200+ rating.</div>
        <div class="oa-goal-meta"><span class="oa-badge oa-badge-emerald">Coding</span></div>
      </div>
      <div class="oa-goal-card">
        <div class="oa-goal-num">GOAL-11 · Exam</div>
        <div class="oa-goal-name">GATE ECE / EIE</div>
        <div class="oa-goal-desc">2-Digit AIR (AIR &lt; 250) in GATE ECE and/or EIE.</div>
        <div class="oa-goal-meta"><span class="oa-badge oa-badge-rose">Exam</span><span class="oa-badge oa-badge-gray">Feb 2027</span></div>
      </div>
      <div class="oa-goal-card">
        <div class="oa-goal-num">GOAL-16 · Research</div>
        <div class="oa-goal-name">Research Publications</div>
        <div class="oa-goal-desc">Publish 1–3 papers in QSIF Spatial Intelligence Fabric (BTP-II).</div>
        <div class="oa-goal-meta"><span class="oa-badge oa-badge-teal">Research</span></div>
      </div>
      <div class="oa-goal-card">
        <div class="oa-goal-num">GOAL-18 · Health</div>
        <div class="oa-goal-name">Weight Gain</div>
        <div class="oa-goal-desc">50 kg baseline → 55–58 kg by Jan 31 → 65–70 kg long-term.</div>
        <div class="oa-goal-meta"><span class="oa-badge oa-badge-emerald">Health</span></div>
      </div>
      <div class="oa-goal-card">
        <div class="oa-goal-num">GOAL-21 · Identity</div>
        <div class="oa-goal-name">Japanese Language</div>
        <div class="oa-goal-desc">Reach JLPT N4/N3 level proficiency.</div>
        <div class="oa-goal-meta"><span class="oa-badge oa-badge-amber">Identity</span></div>
      </div>
      <div class="oa-goal-card">
        <div class="oa-goal-num">GOAL-22 · Identity</div>
        <div class="oa-goal-name">Chess Rating</div>
        <div class="oa-goal-desc">Reach 1100+ Elo rating on Chess.com (Rapid/Blitz).</div>
        <div class="oa-goal-meta"><span class="oa-badge oa-badge-amber">Identity</span></div>
      </div>
      <div class="oa-goal-card" style="border-style:dashed;display:flex;align-items:center;justify-content:center;min-height:8rem">
        <a href="goals/" class="oa-guidance-link" style="font-size:.9rem">View all 31 Goals →</a>
      </div>
    </div>
  </div>
</div>

<!-- ═══════════════════════════════════════════════════════════════
     TAB 3 — PHASE ROADMAP
═══════════════════════════════════════════════════════════════════ -->
<div id="tab-phase" class="oa-tab-content">
  <div class="oa-grid-2">
    <div class="oa-card">
      <div class="oa-card-header">
        <div>
          <p class="oa-label">CAMPAIGN TIMELINE</p>
          <p class="oa-title">184-Day Phase Map</p>
        </div>
        <a href="roadmap-master/" class="oa-btn oa-btn-ghost oa-btn-sm">Full Roadmap →</a>
      </div>
      <div class="oa-phase-list">
        <div class="oa-phase-item">
          <div class="oa-phase-indicator">
            <div class="oa-phase-dot active"></div>
            <div class="oa-phase-line"></div>
          </div>
          <div class="oa-phase-body">
            <div class="oa-phase-name">Phase 0 · Stabilize <span class="oa-badge oa-phase-0" style="margin-left:.35rem;font-size:.65rem">Active</span></div>
            <div class="oa-phase-dates">Days 1–7 · Aug 3–9, 2026</div>
            <div class="oa-phase-desc">Fix sleep to 22:00, establish nutrition baseline, activate GitHub, write first LeetCode, deploy PROJECT OLYMPUS.</div>
          </div>
        </div>
        <div class="oa-phase-item">
          <div class="oa-phase-indicator">
            <div class="oa-phase-dot"></div>
            <div class="oa-phase-line"></div>
          </div>
          <div class="oa-phase-body">
            <div class="oa-phase-name">Phase 1 · Foundations</div>
            <div class="oa-phase-dates">Days 8–28 · Aug 10–31, 2026</div>
            <div class="oa-phase-desc">Ship RVS Accelerator MVP (BTP-I). GATE LA/CAL/DE/NET complete. 48+ LeetCode. Upwork live. Agency groundwork.</div>
          </div>
        </div>
        <div class="oa-phase-item">
          <div class="oa-phase-indicator">
            <div class="oa-phase-dot"></div>
            <div class="oa-phase-line"></div>
          </div>
          <div class="oa-phase-body">
            <div class="oa-phase-name">Phase 2 · Core Engineer</div>
            <div class="oa-phase-dates">Days 29–56 · Sep 1–28, 2026</div>
            <div class="oa-phase-desc">Deep mastery of Computer Architecture, Signals, Devices. 75+ LeetCode. Single-cycle RISC-V CPU started. 10+ applications.</div>
          </div>
        </div>
        <div class="oa-phase-item">
          <div class="oa-phase-indicator">
            <div class="oa-phase-dot"></div>
            <div class="oa-phase-line"></div>
          </div>
          <div class="oa-phase-body">
            <div class="oa-phase-name">Phase 3 · Portfolio</div>
            <div class="oa-phase-dates">Days 57–92 · Sep 29–Oct 31</div>
            <div class="oa-phase-desc">RISC-V CPU verification. HuggingFace AI model deployed. 130+ LeetCode. Active recruiter outreach.</div>
          </div>
        </div>
        <div class="oa-phase-item">
          <div class="oa-phase-indicator">
            <div class="oa-phase-dot"></div>
            <div class="oa-phase-line"></div>
          </div>
          <div class="oa-phase-body">
            <div class="oa-phase-name">Phase 4 · Market</div>
            <div class="oa-phase-dates">Days 93–138 · Nov 1–Dec 15</div>
            <div class="oa-phase-desc">Interview prep. STAR stories. 170+ LeetCode. 70% GATE syllabus. 6+ mock interviews. 40+ applications.</div>
          </div>
        </div>
        <div class="oa-phase-item">
          <div class="oa-phase-indicator">
            <div class="oa-phase-dot"></div>
          </div>
          <div class="oa-phase-body">
            <div class="oa-phase-name">Phase 5 · Conversion</div>
            <div class="oa-phase-dates">Days 139–184 · Dec 16–Jan 31, 2027</div>
            <div class="oa-phase-desc">GATE mock avg &gt;80%. 200+ LeetCode. 100+ HDLBits. ₹20+ LPA offer in hand. Mission complete.</div>
          </div>
        </div>
      </div>
    </div>

    <div class="oa-stack">
      <div class="oa-card">
        <p class="oa-label">KEY QUANTITATIVE TARGETS</p>
        <p class="oa-title" style="margin:.3rem 0 .75rem">Mission Numbers</p>
        <div class="oa-stack" style="gap:.6rem">
          <div>
            <div class="oa-progress-row"><span>LeetCode</span><span class="oa-progress-pct" id="oa-target-lc">0</span></div>
            <div class="oa-progress-bar"><div class="oa-progress-fill" id="oa-lc-bar" style="width:0%"></div></div>
          </div>
          <div>
            <div class="oa-progress-row"><span>HDLBits</span><span class="oa-progress-pct" id="oa-target-hdlbits">0</span></div>
            <div class="oa-progress-bar"><div class="oa-progress-fill oa-progress-fill-teal" id="oa-hdl-bar" style="width:0%"></div></div>
          </div>
          <div>
            <div class="oa-progress-row"><span>GATE Syllabus</span><span class="oa-progress-pct" id="oa-target-gate">0%</span></div>
            <div class="oa-progress-bar"><div class="oa-progress-fill oa-progress-fill-emerald" id="oa-gate-bar" style="width:0%"></div></div>
          </div>
          <div>
            <div class="oa-progress-row"><span>Body Weight</span><span class="oa-progress-pct" id="oa-target-weight">50kg</span></div>
            <div class="oa-progress-bar"><div class="oa-progress-fill oa-progress-fill-warm" id="oa-wt-bar" style="width:30%"></div></div>
          </div>
          <div>
            <div class="oa-progress-row"><span>Income (₹6L goal)</span><span class="oa-progress-pct" id="oa-target-income">₹0L</span></div>
            <div class="oa-progress-bar"><div class="oa-progress-fill" id="oa-inc-bar" style="width:0%"></div></div>
          </div>
        </div>
      </div>

      <div class="oa-card">
        <p class="oa-label">CURRENT PHASE</p>
        <p class="oa-title" style="margin:.3rem 0 .5rem">Phase 0 · Stabilize</p>
        <p style="font-size:.82rem;color:var(--oa-text-2);margin-bottom:.75rem">Establish the operating infrastructure. No shortcuts.</p>
        <div class="oa-stack" style="gap:.4rem;font-size:.82rem">
          <div class="oa-row"><span>✅</span><span>Sleep fixed to 22:00</span></div>
          <div class="oa-row"><span>✅</span><span>PROJECT OLYMPUS deployed</span></div>
          <div class="oa-row"><span>⬜</span><span>Resume v1.0 complete</span></div>
          <div class="oa-row"><span>⬜</span><span>LinkedIn optimized</span></div>
          <div class="oa-row"><span>⬜</span><span>GitHub profile polished</span></div>
          <div class="oa-row"><span>⬜</span><span>First LeetCode problem</span></div>
          <div class="oa-row"><span>⬜</span><span>First HDLBits problem</span></div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ═══════════════════════════════════════════════════════════════
     TAB 4 — DASHBOARDS
═══════════════════════════════════════════════════════════════════ -->
<div id="tab-dash" class="oa-tab-content">
  <div class="oa-grid-3">
    <a class="oa-launch-item" href="engineering-dashboard/">
      <div class="oa-launch-icon">📊</div>
      <div><div class="oa-launch-name">Engineering Dashboard</div><div class="oa-launch-desc">ECE, CS, AI/ML KPIs, RTL progress, GATE tracker</div></div>
    </a>
    <a class="oa-launch-item" href="career-dashboard/">
      <div class="oa-launch-icon">🚀</div>
      <div><div class="oa-launch-name">Career Dashboard</div><div class="oa-launch-desc">Application pipeline, salary targets, company tracker</div></div>
    </a>
    <a class="oa-launch-item" href="health-dashboard/">
      <div class="oa-launch-icon">❤️</div>
      <div><div class="oa-launch-name">Health Dashboard</div><div class="oa-launch-desc">Weight log, sleep tracker, workout progress</div></div>
    </a>
    <a class="oa-launch-item" href="learning-dashboard/">
      <div class="oa-launch-icon">📖</div>
      <div><div class="oa-launch-name">Learning Dashboard</div><div class="oa-launch-desc">Books, courses, LeetCode, spaced repetition</div></div>
    </a>
    <a class="oa-launch-item" href="finance-dashboard/">
      <div class="oa-launch-icon">💰</div>
      <div><div class="oa-launch-name">Finance Dashboard</div><div class="oa-launch-desc">Income tracker, ₹6L goal, agency revenue</div></div>
    </a>
    <a class="oa-launch-item" href="ai-dashboard/">
      <div class="oa-launch-icon">🤖</div>
      <div><div class="oa-launch-name">AI/ML Dashboard</div><div class="oa-launch-desc">Model registry, agents, automation, prompts</div></div>
    </a>
    <a class="oa-launch-item" href="research-dashboard/">
      <div class="oa-launch-icon">🔬</div>
      <div><div class="oa-launch-name">Research Dashboard</div><div class="oa-launch-desc">QSIF BTP-II, 8-paper program, publication tracker</div></div>
    </a>
    <a class="oa-launch-item" href="weekly-review/">
      <div class="oa-launch-icon">📋</div>
      <div><div class="oa-launch-name">Weekly Review</div><div class="oa-launch-desc">Sunday cadence — 5 questions, audits, forgiveness</div></div>
    </a>
    <a class="oa-launch-item" href="monthly-review/">
      <div class="oa-launch-icon">📅</div>
      <div><div class="oa-launch-name">Monthly Review</div><div class="oa-launch-desc">Phase scorecard, milestone gate, next-month plan</div></div>
    </a>
  </div>
</div>

<!-- ═══════════════════════════════════════════════════════════════
     TAB 5 — QUICK LAUNCH
═══════════════════════════════════════════════════════════════════ -->
<div id="tab-launch" class="oa-tab-content">
  <div class="oa-launch-grid">
    <a class="oa-launch-item" href="mission/"><div class="oa-launch-icon">🏛</div><div><div class="oa-launch-name">Mission &amp; Vision</div><div class="oa-launch-desc">Why Statement, Identity Manifesto, The Goal</div></div></a>
    <a class="oa-launch-item" href="goals/"><div class="oa-launch-icon">🎯</div><div><div class="oa-launch-name">All 31 Goals</div><div class="oa-launch-desc">Complete goal matrix with 27 quantitative targets</div></div></a>
    <a class="oa-launch-item" href="roadmap-master/"><div class="oa-launch-icon">🗺️</div><div><div class="oa-launch-name">Master Roadmap</div><div class="oa-launch-desc">70 engineering domains — unified progress tracker</div></div></a>
    <a class="oa-launch-item" href="projects/"><div class="oa-launch-icon">📁</div><div><div class="oa-launch-name">Projects Database</div><div class="oa-launch-desc">All 35+ projects — status, skills, GitHub, demo</div></div></a>
    <a class="oa-launch-item" href="ai-prompts/"><div class="oa-launch-icon">🤖</div><div><div class="oa-launch-name">AI Prompts Library</div><div class="oa-launch-desc">Coding, research, interview, writing prompts</div></div></a>
    <a class="oa-launch-item" href="quickstart/"><div class="oa-launch-icon">⚡</div><div><div class="oa-launch-name">Start Today</div><div class="oa-launch-desc">Daily execution protocol, step-by-step</div></div></a>
    <a class="oa-launch-item" href="navigation/"><div class="oa-launch-icon">🗂</div><div><div class="oa-launch-name">Repository Map</div><div class="oa-launch-desc">Full directory of 14 domains and 18 systems</div></div></a>
    <a class="oa-launch-item" href="lifecycle/"><div class="oa-launch-icon">🔄</div><div><div class="oa-launch-name">Review Cadence</div><div class="oa-launch-desc">Weekly, monthly, quarterly review schedules</div></div></a>
    <a class="oa-launch-item" href="appendices/"><div class="oa-launch-icon">🛡</div><div><div class="oa-launch-name">Recovery Protocol</div><div class="oa-launch-desc">Minimum Viable Day, burnout, trauma recovery</div></div></a>
    <a class="oa-launch-item" href="user-guide/"><div class="oa-launch-icon">📖</div><div><div class="oa-launch-name">Comprehensive Guide</div><div class="oa-launch-desc">Complete operational manual — all protocols</div></div></a>
    <a class="oa-launch-item" href="repository-health/"><div class="oa-launch-icon">🔧</div><div><div class="oa-launch-name">System Health</div><div class="oa-launch-desc">Validation status, script checks, link audit</div></div></a>
    <a class="oa-launch-item" href="faq/"><div class="oa-launch-icon">❓</div><div><div class="oa-launch-name">FAQ</div><div class="oa-launch-desc">Common questions and troubleshooting</div></div></a>
  </div>
</div>

<!-- FOOTER -->
<footer class="oa-footer">
  <p>If the repository is immaculate but your skills have not moved, OLYMPUS has failed.</p>
  <div class="oa-footer-links">
    <a href="user-guide/">User Guide</a>
    <a href="weekly-review/">Weekly Review</a>
    <a href="appendices/">Recovery</a>
    <a href="repository-health/">System Health</a>
  </div>
</footer>

</div>
