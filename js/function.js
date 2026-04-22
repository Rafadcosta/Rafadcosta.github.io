function showPhoto() {
    var photo = document.getElementById("about-photo");
    photo.classList.add('show');
}

function hidePhoto(){
    var hide = document.getElementById("about-photo");
    hide.classList.remove('show');
}

document.addEventListener('DOMContentLoaded', function() {
    var yearNode = document.getElementById('current-year');
    if (yearNode) {
        yearNode.textContent = new Date().getFullYear();
    }
});

/* ------------------------------------- */
/* ------------------------------------- */
/* ------------------------------------- */
/* ------------------------------------- */

// Botão que volta o usuário para o topo da página
const scrollToTopBtn = document.getElementById('scrollToTop');
    // Mostra/esconde o botão baseado na posição do scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
    scrollToTopBtn.classList.add('visible');
    } else {
    scrollToTopBtn.classList.remove('visible');
    }
});
    // Ao clicar, volta ao topo da página
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
    });
});

/* ── DARK MODE TOGGLE ── */
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    
    // Verificar preferência salva ou preferência do sistema
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (savedTheme === null && prefersDark)) {
        htmlElement.classList.add('dark-mode');
        updateToggleIcon(true);
    }
    
    // Event listener para o botão de toggle
    themeToggle.addEventListener('click', function() {
        htmlElement.classList.toggle('dark-mode');
        const isDarkMode = htmlElement.classList.contains('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        updateToggleIcon(isDarkMode);
    });
    
    function updateToggleIcon(isDark) {
        const icon = themeToggle.querySelector('i');
        if (isDark) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }
});

/* ── SMOOTH SCROLL SEM ATUALIZAR URL ── */
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os links internos com href começando com #
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ignora links vazios ou apenas #
            if (href === '#' || href === '') return;
            
            const targetElement = document.querySelector(href);
            
            if (targetElement) {
                e.preventDefault();
                
                // Scroll suave sem mudar a URL
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});