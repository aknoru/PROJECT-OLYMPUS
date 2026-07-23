---
id: DOCS-INDEX-MD
title: "Olympus Command Center"
type: interactive-application
status: active
version: 2.0.0
owner: project-maintainer
---

# Olympus Command Center

<div id="olympus-app" class="oa-shell" aria-live="polite">
  <section class="oa-hero">
    <div>
      <p class="oa-eyebrow">PROJECT OLYMPUS · OPERATION RENAISSANCE</p>
      <h2 id="oa-greeting">Build capability. Leave evidence.</h2>
      <p class="oa-subtitle" id="oa-date">Loading your command center…</p>
    </div>
    <div class="oa-sync" title="Live repository connection">
      <span class="oa-status-dot" id="oa-sync-dot"></span>
      <span id="oa-sync-label">Connecting to repository</span>
    </div>
  </section>

  <nav class="oa-modebar" aria-label="Operating mode">
    <button type="button" class="oa-mode is-active" data-mode="normal">Normal</button>
    <button type="button" class="oa-mode" data-mode="minimum">Minimum viable day</button>
    <button type="button" class="oa-mode" data-mode="recovery">Recovery</button>
    <span class="oa-mode-note" id="oa-mode-note">Protect one meaningful outcome.</span>
  </nav>

  <section class="oa-metrics" aria-label="Today at a glance">
    <article><span>Completed</span><strong id="oa-completed">0</strong><small>tasks today</small></article>
    <article><span>Deep work</span><strong id="oa-focus-total">0m</strong><small>verified focus</small></article>
    <article><span>Evidence</span><strong id="oa-evidence-total">0</strong><small>artifacts logged</small></article>
    <article><span>Repository</span><strong id="oa-health">—</strong><small id="oa-health-detail">checking health</small></article>
  </section>

  <div class="oa-layout">
    <main class="oa-main">
      <section class="oa-panel oa-plan">
        <div class="oa-panel-head">
          <div><p class="oa-label">TODAY</p><h3>Execution plan</h3></div>
          <span class="oa-counter" id="oa-plan-counter">0 / 3</span>
        </div>
        <form id="oa-task-form" class="oa-input-row">
          <label class="sr-only" for="oa-task-input">Add today’s outcome</label>
          <input id="oa-task-input" maxlength="120" placeholder="Define a verifiable outcome…" required>
          <button type="submit" class="oa-primary">Add outcome</button>
        </form>
        <ul id="oa-task-list" class="oa-task-list"></ul>
        <div id="oa-empty-plan" class="oa-empty">
          <strong>No outcomes selected.</strong>
          <span>Choose the smallest result that would make today count.</span>
        </div>
      </section>

      <section class="oa-panel oa-focus">
        <div class="oa-panel-head">
          <div><p class="oa-label">FOCUS</p><h3>Deep-work session</h3></div>
          <select id="oa-focus-length" aria-label="Focus session length">
            <option value="25">25 minutes</option>
            <option value="50">50 minutes</option>
            <option value="90">90 minutes</option>
          </select>
        </div>
        <div class="oa-timer-wrap">
          <div class="oa-timer" id="oa-timer">25:00</div>
          <p id="oa-focus-prompt">Select an outcome, remove distractions, then begin.</p>
          <div class="oa-timer-actions">
            <button type="button" class="oa-primary" id="oa-timer-toggle">Start focus</button>
            <button type="button" class="oa-ghost" id="oa-timer-reset">Reset</button>
          </div>
        </div>
      </section>

      <section class="oa-panel oa-evidence">
        <div class="oa-panel-head">
          <div><p class="oa-label">PROOF OF WORK</p><h3>Evidence capture</h3></div>
          <button type="button" class="oa-text-button" id="oa-export">Export data</button>
        </div>
        <form id="oa-evidence-form">
          <label for="oa-evidence-input">What changed, and how was it verified?</label>
          <textarea id="oa-evidence-input" maxlength="600" rows="3" placeholder="Example: Implemented UART RX; simulation passes framing and overflow cases." required></textarea>
          <div class="oa-input-row oa-evidence-actions">
            <select id="oa-evidence-type" aria-label="Evidence type">
              <option>Code</option><option>Problem set</option><option>Design</option>
              <option>Research</option><option>Review</option><option>Other</option>
            </select>
            <button type="submit" class="oa-primary">Save evidence</button>
          </div>
        </form>
        <div id="oa-evidence-list" class="oa-evidence-list"></div>
      </section>
    </main>

    <aside class="oa-side">
      <section class="oa-panel oa-next">
        <p class="oa-label">ADAPTIVE GUIDANCE</p>
        <h3>Next best action</h3>
        <p id="oa-recommendation">Assess your capacity to generate a recommendation.</p>
        <div class="oa-capacity">
          <label for="oa-capacity">Capacity today <strong id="oa-capacity-value">3 / 5</strong></label>
          <input id="oa-capacity" type="range" min="1" max="5" value="3">
        </div>
        <a id="oa-recommendation-link" class="oa-inline-link" href="quickstart/">Open daily protocol →</a>
      </section>

      <section class="oa-panel">
        <div class="oa-panel-head">
          <div><p class="oa-label">LAST 7 DAYS</p><h3>Execution rhythm</h3></div>
          <strong id="oa-streak">0 day streak</strong>
        </div>
        <div id="oa-week-chart" class="oa-week-chart" aria-label="Seven day activity"></div>
      </section>

      <section class="oa-panel oa-search">
        <p class="oa-label">SECOND BRAIN</p>
        <h3>Search knowledge</h3>
        <label class="sr-only" for="oa-knowledge-search">Search repository knowledge</label>
        <input id="oa-knowledge-search" type="search" placeholder="Search 1,000+ documents…">
        <div id="oa-search-results" class="oa-search-results">
          <p>Search by title, type, status, or path.</p>
        </div>
        <a class="oa-inline-link" href="navigation/">Browse repository map →</a>
      </section>

      <section class="oa-panel oa-data">
        <p class="oa-label">DATA CONTROL</p>
        <h3>Private by default</h3>
        <p>Your execution records stay in this browser. Export them for backup or transfer.</p>
        <div class="oa-data-actions">
          <label class="oa-ghost oa-file-button">Import data<input id="oa-import" type="file" accept="application/json"></label>
          <button type="button" class="oa-danger-text" id="oa-clear">Clear local data</button>
        </div>
      </section>
    </aside>
  </div>

  <footer class="oa-footer">
    <p>If the repository is immaculate but your skills have not moved, Olympus has failed.</p>
    <div><a href="lifecycle/">Review cadence</a><a href="appendices/#recovery-route">Recovery</a><a href="repository-health/">System health</a></div>
  </footer>
</div>

## Purpose

Operate the Renaissance execution loop through a responsive interface while
preserving Markdown and repository data as canonical sources.

## Privacy

Tasks, focus records, capacity, and evidence entered here use browser-local
storage. They are not committed to GitHub or published by GitHub Pages. Use
Export Data to create a portable backup.

## References

- [Master Architecture](../MASTER_ARCHITECTURE.md)
- [Daily Execution Guide](quickstart.md)
- [Repository Map](navigation.md)

## Revision History

| Version | Change |
|---|---|
| 2.0.0 | Rebuilt the site as a functional adaptive execution interface. |

