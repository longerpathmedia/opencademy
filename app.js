// --- Theme ---
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('oc:theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
if (savedTheme === 'dark') document.documentElement.classList.add('dark');
themeToggle.textContent = document.documentElement.classList.contains('dark') ? 'Light' : 'Dark';
themeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  const mode = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('oc:theme', mode);
  themeToggle.textContent = mode === 'dark' ? 'Light' : 'Dark';
});

// --- Share ---
document.getElementById('shareBtn').addEventListener('click', async () => {
  const data = { title: document.title, text: 'Learn startups with this free curated course', url: location.href };
  try {
    if (navigator.share) { await navigator.share(data); }
    else {
      await navigator.clipboard.writeText(location.href);
      alert('Link copied to clipboard!');
    }
  } catch {}
});

// --- Progress helpers ---
const key = (id) => `oc:${COURSE_ID}:lesson:${id}`;
const getDone = (id) => localStorage.getItem(key(id)) === '1';
const setDone = (id, v) => localStorage.setItem(key(id), v ? '1' : '0');

// --- Duration helpers ---
function parseDurationToSeconds(d) {
  if (!d) return 0;
  const parts = d.split(':').map(Number); // mm:ss or hh:mm:ss
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  return 0;
}
function formatSeconds(total) {
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  return h > 0 ? `${h}h ${m}m` : `${m}m ${s}s`;
}

// --- Render modules ---
const modulesEl = document.getElementById('modules');
const lessonCountEl = document.getElementById('lessonCount');
const totalDurationEl = document.getElementById('totalDuration');
const overallBar = document.getElementById('overallBar');
const overallPct = document.getElementById('overallPct');

function youTubeToEmbed(url) {
  try {
    const u = new URL(url);
    const id = u.searchParams.get('v') || u.pathname.split('/').pop();
    const t = u.searchParams.get('t');
    const start = t ? `&start=${parseInt(t, 10)}` : '';
    return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0${start}`;
  } catch {
    return '';
  }
}

function lessonThumb(url) {
  try {
    const u = new URL(url);
    const id = u.searchParams.get('v') || u.pathname.split('/').pop();
    return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  } catch {
    return '';
  }
}

function computeStats() {
  let totalLessons = 0, doneLessons = 0, totalSeconds = 0;
  MODULES.forEach(m => {
    m.lessons.forEach(l => {
      totalLessons++;
      if (getDone(l.id)) doneLessons++;
      totalSeconds += parseDurationToSeconds(l.duration);
    });
  });
  const pct = totalLessons ? Math.round((doneLessons / totalLessons) * 100) : 0;
  overallBar.style.width = pct + '%';
  overallPct.textContent = pct + '%';
  lessonCountEl.textContent = `${totalLessons} lesson${totalLessons === 1 ? '' : 's'}`;
  totalDurationEl.textContent = totalSeconds ? `${formatSeconds(totalSeconds)} total` : 'Total time varies';
}

function render() {
  modulesEl.innerHTML = '';
  MODULES.forEach((module, mi) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/60 shadow-sm overflow-hidden';

    const header = document.createElement('div');
    header.className = 'p-4 md:p-5 flex items-start gap-4';
    header.innerHTML = `
      <div class="flex-1">
        <h2 class="text-lg md:text-xl font-semibold">${module.title}</h2>
        <p class="mt-1 text-sm text-slate-600 dark:text-slate-300">${module.description || ''}</p>
      </div>
      <div class="hidden sm:flex items-center gap-2">
        <span class="text-sm text-slate-600 dark:text-slate-300" id="module-${mi}-progress">0%</span>
        <div class="w-40 h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
          <div id="module-${mi}-bar" class="h-2 bg-indigo-500" style="width:0%"></div>
        </div>
      </div>`;

    const list = document.createElement('div');
    list.className = 'divide-y divide-slate-200 dark:divide-slate-700';

    let done = 0;
    module.lessons.forEach((l, li) => {
      const isDone = getDone(l.id);
      if (isDone) done++;
      const row = document.createElement('div');
      row.className = 'p-3 md:p-4 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-900/40';
      row.innerHTML = `
        <input type="checkbox" data-lesson-id="${l.id}" ${isDone ? 'checked' : ''} class="mt-0.5 h-4 w-4 rounded border-slate-300 dark:border-slate-600"/>
        <button data-open-video="${l.id}" class="flex-1 text-left">
          <div class="flex items-center gap-3">
            <img src="${lessonThumb(l.url)}" alt="" class="hidden sm:block w-24 h-14 object-cover rounded-lg border border-slate-200 dark:border-slate-700"/>
            <div>
              <div class="font-medium leading-snug">${l.title}</div>
              <div class="text-xs text-slate-500">${l.duration || ''}</div>
            </div>
          </div>
        </button>
        <a href="${l.url}" target="_blank" rel="noopener" class="text-xs px-2 py-1 rounded-lg border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800">Open ↗</a>
      `;
      list.appendChild(row);
    });

    wrapper.appendChild(header);
    wrapper.appendChild(list);
    modulesEl.appendChild(wrapper);

    const pct = module.lessons.length ? Math.round((done / module.lessons.length) * 100) : 0;
    const bar = wrapper.querySelector(`#module-${mi}-bar`);
    const label = wrapper.querySelector(`#module-${mi}-progress`);
    if (bar) bar.style.width = pct + '%';
    if (label) label.textContent = pct + '%';
  });

  computeStats();
}

// --- Interactions ---
document.addEventListener('change', (e) => {
  const cb = e.target.closest('input[type="checkbox"][data-lesson-id]');
  if (!cb) return;
  const id = cb.getAttribute('data-lesson-id');
  setDone(id, cb.checked);
  render();
});

// Modal logic
const modal = document.getElementById('videoModal');
const player = document.getElementById('player');
const playerTitle = document.getElementById('playerTitle');
const markDoneBtn = document.getElementById('markDone');
let currentLessonId = null;

function openVideo(lessonId) {
  const lesson = MODULES.flatMap(m => m.lessons).find(l => l.id === lessonId);
  if (!lesson) return;
  currentLessonId = lesson.id;
  player.src = youTubeToEmbed(lesson.url);
  playerTitle.textContent = lesson.title;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  markDoneBtn.textContent = getDone(lesson.id) ? 'Completed ✓' : 'Mark complete';
}

document.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-open-video]');
  if (btn) {
    openVideo(btn.getAttribute('data-open-video'));
  }
});

document.getElementById('closeModal').addEventListener('click', () => {
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  player.src = '';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    player.src = '';
  }
});

markDoneBtn.addEventListener('click', () => {
  if (!currentLessonId) return;
  const v = !getDone(currentLessonId);
  setDone(currentLessonId, v);
  markDoneBtn.textContent = v ? 'Completed ✓' : 'Mark complete';
  render();
});

// Search filter
const search = document.getElementById('search');
search.addEventListener('input', () => {
  const q = search.value.trim().toLowerCase();
  const blocks = modulesEl.querySelectorAll('div.divide-y > div');
  MODULES.forEach((m, mi) => {
    m.lessons.forEach((l, li) => {
      const row = blocks[Array.from(MODULES.slice(0, mi).reduce((acc, mod) => acc + mod.lessons.length, 0)) + li];
    });
  });
  // Simpler approach: rerender and then hide non-matches
  render();
  if (!q) return;
  const cards = modulesEl.querySelectorAll('div.divide-y');
  cards.forEach(card => {
    card.querySelectorAll('div.p-3, div.p-4').forEach(row => {
      const text = row.innerText.toLowerCase();
      row.style.display = text.includes(q) ? '' : 'none';
    });
  });
});

// Reset progress
document.getElementById('resetProgress').addEventListener('click', () => {
  if (!confirm('Reset all progress for this course?')) return;
  MODULES.forEach(m => m.lessons.forEach(l => localStorage.removeItem(key(l.id))));
  render();
});

// Update page title and heading
if (typeof COURSE_TITLE !== 'undefined') {
  document.title = `OpenCademy — ${COURSE_TITLE} (Free Course)`;
  const titleElement = document.querySelector('#courseTitle') || document.querySelector('h1');
  if (titleElement) {
    titleElement.textContent = COURSE_TITLE;
  }
}

// Initial render
render();

