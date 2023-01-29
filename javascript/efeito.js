
function typeWriter(elemento){
    const textArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textArray.forEach((letra, i) => {
        setTimeout ( () => elemento.innerHTML += letra, 160 * i)
    });
}

const a1 = document.querySelector('.a1');
const a2 = document.querySelector('.a2');
const a3 = document.querySelector('.a3');
const a4 = document.querySelector('.a4');
const a5 = document.querySelector('.a5');
typeWriter(a1);
typeWriter(a2);
typeWriter(a3);
typeWriter(a4);
typeWriter(a5);