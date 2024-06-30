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

function showSidebar(){
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex'
}

function hideSidebar(){
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none'
}

document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll('nav a');

  links.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth' });
          }
      });
  });
});