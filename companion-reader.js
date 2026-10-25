(() => {
  const reader = document.querySelector('.reader[data-base]');
  if (!reader) return;
  const { base, title } = reader.dataset;
  const total = Number(reader.dataset.count);
  const image = reader.querySelector('#edition-image');
  const picker = reader.querySelector('#edition-picker');
  const previous = reader.querySelector('#edition-previous');
  const next = reader.querySelector('#edition-next');
  const status = reader.querySelector('#edition-status');
  const share = document.querySelector('.share-edition');
  const shareStatus = document.querySelector('#share-status');
  let descriptions = {};
  let page = 1;
  const imagePath = n => `${base}/pages/page-${String(n).padStart(2, '0')}.jpg`;
  function describe() {
    const detail = descriptions[page] || (page === 1 ? 'cover' : '');
    image.alt = `${title}, page ${page}${detail ? ' — ' + detail : ''}`;
    status.textContent = `Page ${page} of ${total}${detail ? ': ' + detail : ''}`;
  }
  function show(value, updateHash = true) {
    page = Math.max(1, Math.min(total, Math.floor(Number(value) || 1)));
    image.src = imagePath(page);
    picker.value = String(page);
    previous.disabled = page === 1;
    next.disabled = page === total;
    describe();
    shareStatus.textContent = '';
    if (updateHash) history.replaceState(null, '', `#page-${page}`);
    if (page < total) {
      const preload = new Image();
      preload.src = imagePath(page + 1);
    }
  }
  previous.addEventListener('click', () => show(page - 1));
  next.addEventListener('click', () => show(page + 1));
  picker.addEventListener('change', () => show(picker.value));
  reader.addEventListener('keydown', event => {
    if (event.target === picker || event.altKey || event.ctrlKey || event.metaKey) return;
    const target = { ArrowRight: page + 1, ArrowLeft: page - 1, Home: 1, End: total }[event.key];
    if (target !== undefined) { event.preventDefault(); show(target); }
  });
  function fromHash() {
    const match = location.hash.match(/^#page-(\d+)$/);
    if (match) {
      show(match[1], false);
      document.querySelector('#read').scrollIntoView();
    }
  }
  share.addEventListener('click', async () => {
    const canonical = document.querySelector('link[rel="canonical"]').href;
    const url = `${canonical}#page-${page}`;
    try {
      await navigator.clipboard.writeText(url);
      shareStatus.textContent = `Link copied — page ${page}.`;
    } catch {
      shareStatus.replaceChildren();
      const link = document.createElement('a');
      link.href = url;
      link.textContent = 'Open the share link, then copy it from your address bar.';
      shareStatus.append(link);
    }
  });
  show(1, false);
  fromHash();
  window.addEventListener('hashchange', fromHash);
  fetch(`${base}/pages.json`)
    .then(response => { if (!response.ok) throw new Error('Page descriptions unavailable'); return response.json(); })
    .then(data => { descriptions = data; describe(); })
    .catch(() => { /* Page numbers and the PDF remain available without descriptions. */ });
})();
