let preloader = document.querySelector('#preloader')
if (preloader) {
  window.addEventListener('load', () => {
    preloader.remove()
  });
}
// $(window).scroll(function(){
//     $('nav').toggleClass('scrolled', $(this).scrollTop() > 50)

// });