document.addEventListener("DOMContentLoaded", function () {
  function header(){
    const header = document.querySelector('header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScroll > lastScrollTop) {
        header.classList.add('hidden');
      } else {
        header.classList.remove('hidden');
      }
      lastScrollTop = currentScroll;
    });
  }

  header();
});
