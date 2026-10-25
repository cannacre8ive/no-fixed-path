(() => {
  const image = document.querySelector('#page-image');
  const picker = document.querySelector('#page-picker');
  const previous = document.querySelector('#previous');
  const next = document.querySelector('#next');
  const status = document.querySelector('#page-status');
  const descriptions = {1:'cover',3:'a note on the path',4:'Rooted, outdoor garden',16:'Permission to begin',17:'Spencer on the influence of LSD',20:'Electric, a room in motion',22:'Dijon in blue stage light',23:'Dijon, monochrome performance',26:'Allan Rayman, under the beam',27:'Allan Rayman in red stage light',30:'Open air, Trillium Lake canopy',38:'Make something real',46:'photographs and colophon',47:'Keep your eyes open',48:'back cover'};
  let page = 1;
  for(let n=1;n<=48;n++){const o=document.createElement('option');o.value=n;o.textContent=String(n).padStart(2,'0');picker.append(o);}
  function show(n, updateHash=true){
    page=Math.min(48,Math.max(1,Math.floor(Number(n)||1)));
    image.src=`/assets/pages/page-${String(page).padStart(2,'0')}.jpg`;
    image.alt=`No Fixed Path, page ${page}${descriptions[page]?' — '+descriptions[page]:''}`;
    picker.value=page;previous.disabled=page===1;next.disabled=page===48;
    status.textContent=`Page ${page} of 48${descriptions[page]?': '+descriptions[page]:''}`;
    document.querySelectorAll('[data-page]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.page)===page)));
    if(updateHash)history.replaceState(null,'',`#page-${page}`);
    if(page<48){const preload=new Image();preload.src=`/assets/pages/page-${String(page+1).padStart(2,'0')}.jpg`;}
  }
  previous.addEventListener('click',()=>show(page-1));next.addEventListener('click',()=>show(page+1));picker.addEventListener('change',()=>show(picker.value));
  document.querySelectorAll('[data-page]').forEach(b=>b.addEventListener('click',()=>show(b.dataset.page)));
  document.querySelectorAll('[data-open-page]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();show(a.dataset.openPage);document.querySelector('#read').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}));
  document.querySelector('.reader').addEventListener('keydown',e=>{if(e.target===picker)return;if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();show(page+(e.key==='ArrowRight'?1:-1));}});
  function fromHash(){const m=location.hash.match(/^#page-(\d+)$/);if(m){show(Number(m[1]),false);document.querySelector('#read').scrollIntoView();}}
  show(1,false);fromHash();window.addEventListener('hashchange',fromHash);
})();
