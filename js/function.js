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