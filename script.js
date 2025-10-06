// JAVASCRIPT FOR BABY SURVIVAL GUIDE // 

// NAVBAR FUNCTIONALITY // 

const toggleBtn = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const navLinks = sidebar.querySelectorAll('a');

  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      sidebar.classList.remove('active');
    });
  });