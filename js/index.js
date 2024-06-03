document.addEventListener("DOMContentLoaded", function () {
  function header(){
    const header = document.querySelector('header');
    let lastScrollTop = 0;
    let ticking = false;
    
    function handleHeader() {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScroll > lastScrollTop) {
        if(!header.classList.contains('hidden')){
          header.classList.add('hidden');
        }
      }else {
        if(header.classList.contains('hidden')){
          header.classList.remove('hidden');
        }
      }
      lastScrollTop = currentScroll;
    }
    
    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          handleHeader();
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  
  header();
});