// JavaScript para el desplazamiento suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.getElementById('menu-toggle').addEventListener('click', function() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});
