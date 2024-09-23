// JavaScript para el desplazamiento suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
//Función: Hace que cuando un usuario haga clic en un enlace ancla (un enlace que apunta a una sección dentro de la misma página, como #nosotros o #contacto), la página se desplace suavemente hacia esa sección.
//Cómo funciona:
//Selecciona todos los enlaces (<a>) que comienzan con "#" (es decir, enlaces ancla).
//Añade un evento de clic a cada uno de esos enlaces.
//Previene el comportamiento predeterminado del clic (el salto inmediato a la sección).
//Usa scrollIntoView para desplazar la vista de manera suave hacia la sección vinculada.
document.getElementById('menu-toggle').addEventListener('click', function() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});
//Función: Permite que el menú de navegación (en formato de barra de hamburguesa en móviles) se expanda o colapse cuando se hace clic en el ícono del menú.
//Cómo funciona:
//Selecciona el elemento con el ID menu-toggle (el icono de menú de hamburguesa).
//Añade un evento de clic al ícono.
//Cuando se hace clic, se selecciona la lista de enlaces de navegación (clase .nav-links) y se alterna la clase active, que generalmente se usa para mostrar u ocultar el menú con estilos CSS.
