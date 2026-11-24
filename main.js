// menu mobilne
var bur=document.getElementById('burger'),nav=document.getElementById('nav');
bur.addEventListener('click',function(){var o=nav.classList.toggle('otw');bur.setAttribute('aria-expanded',o)});
nav.addEventListener('click',function(e){if(e.target.closest('a')){nav.classList.remove('otw');bur.setAttribute('aria-expanded',false)}});

// galeria: strzalki + przeciaganie mysza
var pas=document.getElementById('pas');
document.querySelectorAll('.strz button').forEach(function(b){b.addEventListener('click',function(){pas.scrollBy({left:b.dataset.k*pas.clientWidth*.7,behavior:'smooth'})})});
var x0=0,s0=0,ciag=false;
pas.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;ciag=true;x0=e.clientX;s0=pas.scrollLeft;pas.classList.add('ciag')});
window.addEventListener('pointermove',function(e){if(ciag)pas.scrollLeft=s0-(e.clientX-x0)});
window.addEventListener('pointerup',function(){if(ciag){ciag=false;pas.classList.remove('ciag')}});

// mapa dopiero przy przewinieciu
var m=document.getElementById('mapa');
new IntersectionObserver(function(w,o){if(w[0].isIntersecting){var f=document.createElement('iframe');f.src=m.dataset.src;f.title='Mapa dojazdu do bazy NAKANU';f.loading='lazy';m.appendChild(f);o.disconnect()}},{rootMargin:'300px'}).observe(m);

// pasek "Zadzwon" na telefonie po zjechaniu z pierwszego ekranu
var dz=document.getElementById('dzwon'),hero=document.querySelector('.hero');
new IntersectionObserver(function(w){dz.classList.toggle('pok',!w[0].isIntersecting)}).observe(hero);
