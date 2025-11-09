import * as params from '@params';

let fuse; // Fuse instance
const resList = document.getElementById('searchResults');
const sInput  = document.getElementById('searchInput');

let first, last, current_elem = null;
let resultsAvailable = false;

// ---------- helpers ----------
function activeToggle(ae) {
  document.querySelectorAll('.focus').forEach(el => el.classList.remove('focus'));
  if (ae) {
    ae.focus();
    document.activeElement = current_elem = ae;
    ae.parentElement.classList.add('focus');
  } else if (document.activeElement && document.activeElement.parentElement) {
    document.activeElement.parentElement.classList.add('focus');
  }
}

function reset() {
  resultsAvailable = false;
  if (resList) resList.innerHTML = '';
  if (sInput) {
    sInput.value = '';
    sInput.focus();
  }
}

function debounce(fn, delay) {
  let id;
  return (...args) => {
    clearTimeout(id);
    id = setTimeout(() => fn.apply(null, args), delay);
  };
}

function getFuseOptions() {
  // default options
  let options = {
    distance: 100,
    threshold: 0.4,
    ignoreLocation: true,
    keys: ['title','permalink','summary','content']
  };
  // merge from params.fuseOpts (PaperMod style)
  if (params && params.fuseOpts) {
    const f = params.fuseOpts;
    options = {
      isCaseSensitive:   f.iscasesensitive ?? false,
      includeScore:      f.includescore ?? false,
      includeMatches:    f.includematches ?? false,
      minMatchCharLength:f.minmatchcharlength ?? 1,
      shouldSort:        f.shouldsort ?? true,
      findAllMatches:    f.findallmatches ?? false,
      keys:              f.keys ?? ['title','permalink','summary','content'],
      location:          f.location ?? 0,
      threshold:         f.threshold ?? 0.4,
      distance:          f.distance ?? 100,
      ignoreLocation:    f.ignorelocation ?? true
    };
  }
  return options;
}

function resolveIndexCandidates() {
  const candidates = [];

  // 1) data-json on the input (recommended)
  if (sInput && sInput.dataset && sInput.dataset.json) {
    candidates.push(sInput.dataset.json);
  }

  // 2) <link rel="preload" as="fetch" href="...index.json">
  const preload = document.querySelector('link[rel="preload"][as="fetch"][href$="index.json"]');
  if (preload && preload.href) {
    candidates.push(preload.href);
  }

  // 3) window.__BASE_URL__ (set in head.html) + index.json
  if (window.__BASE_URL__) {
    try { candidates.push(new URL('index.json', window.__BASE_URL__).href); } catch (e) {}
  }

  // 4) document.baseURI + index.json
  try { candidates.push(new URL('index.json', document.baseURI).href); } catch (e) {}

  // 5) handle common subpath like /search/
  try { candidates.push(new URL('../index.json', document.baseURI).href); } catch (e) {}

  // 6) absolute root as a last resort
  try { candidates.push(new URL('/index.json', location.origin).href); } catch (e) {}

  // de-dup while keeping order
  return [...new Set(candidates)];
}

async function fetchFirstJSON(urls) {
  for (const u of urls) {
    try {
      const r = await fetch(u, { credentials: 'same-origin' });
      if (r.ok) return await r.json();
    } catch (_) {}
  }
  throw new Error('Search index load failed from all candidates.');
}

function buildResults(results) {
  if (!resList) return;
  if (!results || results.length === 0) {
    resultsAvailable = false;
    resList.innerHTML = '';
    return;
  }

  let resultSet = '';
  for (let i = 0; i < results.length; i++) {
    const item = results[i].item || results[i]; // fuse v6 returns { item, score }
    const title = item.title || item.permalink || 'Untitled';
    const link  = item.permalink || '#';
    resultSet += `
      <li class="post-entry">
        <header class="entry-header">${title}&nbsp;»</header>
        <a href="${link}" aria-label="${title}"></a>
      </li>`;
  }

  resList.innerHTML = resultSet;
  resultsAvailable = true;
  first = resList.firstChild;
  last  = resList.lastChild;
}

// ---------- main ----------
(async function init() {
  if (!sInput || !resList) return;             // nothing to wire up
  if (typeof Fuse === 'undefined') {           // ensure fuse.js is loaded
    console.error('Fuse.js not loaded on this page.');
    return;
  }

  let data;
  try {
    data = await fetchFirstJSON(resolveIndexCandidates());
  } catch (e) {
    console.error(e);
    return;
  }

  try {
    fuse = new Fuse(data, getFuseOptions());
  } catch (e) {
    console.error('Failed to initialize Fuse:', e);
    return;
  }

  const runSearch = debounce(() => {
    if (!fuse) return;
    const q = sInput.value.trim();
    if (!q) {
      buildResults([]);
      return;
    }
    let results;
    if (params && params.fuseOpts && typeof params.fuseOpts.limit !== 'undefined') {
      results = fuse.search(q, { limit: params.fuseOpts.limit });
    } else {
      results = fuse.search(q);
    }
    buildResults(results);
  }, 60);

  // live search on input
  sInput.addEventListener('input', runSearch);

  // handle clearing via the native "x" in type="search"
  sInput.addEventListener('search', function () {
    if (!this.value) reset();
  });

  // keyboard navigation
  document.addEventListener('keydown', function (e) {
    const key = e.key;
    const ae  = document.activeElement;
    const inbox = document.getElementById('searchbox')?.contains(ae);

    if (key === 'Escape') {
      reset();
      return;
    }
    if (!resultsAvailable || !inbox) return;

    if (key === 'ArrowDown') {
      e.preventDefault();
      if (ae === sInput) {
        activeToggle(resList.firstChild?.lastChild);
      } else if (ae?.parentElement && ae.parentElement !== last) {
        activeToggle(ae.parentElement.nextSibling?.lastChild);
      }
    } else if (key === 'ArrowUp') {
      e.preventDefault();
      if (ae?.parentElement === first) {
        activeToggle(sInput);
      } else if (ae !== sInput && ae?.parentElement?.previousSibling) {
        activeToggle(ae.parentElement.previousSibling.lastChild);
      }
    } else if (key === 'ArrowRight' || key === 'Enter') {
      if (ae && ae.click) ae.click();
    }
  });
})();
