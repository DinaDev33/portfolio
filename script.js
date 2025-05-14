window.addEventListener('load', function () {
    var preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
});

gsap.from('#navbarAnimation', {opacity:0, duration:2, delay:1.2})
gsap.from('#headerAnimation', {opacity:0, y:-500, duration:2, ease:'power3'})
gsap.from('#cardAnimation', {opacity:0, x:-500, duration:1, delay:0.5, stagger:0.4})
//gsap.from('#form', {opacity:0, scale:3, duration:2, delay:2})
//gsap.from('#form', {opacity:0, duration:2, delay:1.5})
gsap.from('#apps', {opacity:0, x:500, duration:1, delay:0.5, stagger:0.4})