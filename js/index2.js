// main.js
document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = document.querySelectorAll('nav .menus');

    // Añadir scroll suave a los enlaces del menú
    menuLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            // Realizar el desplazamiento suave
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Ajustar el valor para el desplazamiento
                behavior: 'smooth'
            });

            // Añadir clase activa al enlace actual
            menuLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Manejo de scroll para mantener el enlace activo en la sección visible
    window.addEventListener('scroll', () => {
        let scrollPos = window.scrollY + 100; // Ajustar el valor según el tamaño del menú
        
        menuLinks.forEach(link => {
            let section = document.querySelector(link.getAttribute('href'));
            if (section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
                menuLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });
});
