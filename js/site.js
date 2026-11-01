// Interacciones compartidas: header, menú móvil, reveal y año. Respeta prefers-reduced-motion.
(()=>{const d=document,h=d.querySelector('.hdr'),b=d.querySelector('.burger'),n=d.getElementById('nav');
const onS=()=>h&&h.classList.toggle('scrolled',scrollY>24);addEventListener('scroll',onS,{passive:true});onS();
if(b&&n){b.addEventListener('click',()=>{const o=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',!o);d.body.classList.toggle('menu-open',!o)});
n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{b.setAttribute('aria-expanded','false');d.body.classList.remove('menu-open')}));
d.addEventListener('keydown',e=>{if(e.key==='Escape'&&d.body.classList.contains('menu-open')){b.click();b.focus()}})}
const r=d.querySelectorAll('.rv');if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches){r.forEach(e=>e.classList.add('in'))}
else{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -8% 0px'});r.forEach(e=>io.observe(e))}
d.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());})();

(()=>{const f=document.getElementById('frame'),art=document.getElementById('try-art');
document.querySelectorAll('[data-frame]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-frame]').forEach(x=>x.setAttribute('aria-pressed',x===b));f.style.setProperty('--fr',b.dataset.frame)}));
document.querySelectorAll('[data-pp]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-pp]').forEach(x=>x.setAttribute('aria-pressed',x===b));f.style.setProperty('--pp',b.dataset.pp)}));
document.querySelectorAll('[data-art]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-art]').forEach(x=>x.setAttribute('aria-pressed',x===b));art.src=b.dataset.art;art.alt=b.dataset.alt}));
const t=document.querySelector('.track');if(t){document.querySelectorAll('[data-scroll]').forEach(b=>b.addEventListener('click',()=>t.scrollBy({left:t.clientWidth*.8*b.dataset.scroll,behavior:'smooth'})))}})();
