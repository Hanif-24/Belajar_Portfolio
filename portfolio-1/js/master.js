let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = function(){
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('active');
};

window.onscroll = function(){
  menu.classList.remove('bx-x');
  navlist.classList.remove('active');
};

const sr = ScrollReveal ({
  distance: '40px',
  duration: 2600,
  reset: true
})

sr.reveal('.home-txt', {delay:200, origin:'left'})
sr.reveal('.about-me,.service,.portfolio,.blog,.contact,.copyright', {delay:200, origin:'bottom'})

var typed = new Typed('.tulis', {
  strings:["Web Developer","Programmer","Human"],typeSpeed:120, backSpeed:110, loop:true
})
