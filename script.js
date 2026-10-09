document.documentElement.classList.add('js-ready');
(() => {
 const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');
 if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'×':'☰';});
 nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰';}));}
 const items=document.querySelectorAll('.reveal');
 if('IntersectionObserver'in window&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver((entries,obs)=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');obs.unobserve(e.target);}}),{threshold:.12});items.forEach(item=>observer.observe(item));}
 else items.forEach(item=>item.classList.add('is-visible'));
})();