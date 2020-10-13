// efeito de máquina de escrever

function typeWriter(elemento){
    const textArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textArray.forEach((letra, i) => {
        setTimeout ( () => elemento.innerHTML += letra, 100 * i)
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

// fim efeito de máquina de escrever

// efeito de scroll suave
const menuItems = document.querySelectorAll('.navbar a[href^="#"');

menuItems.forEach(item => {
	item.addEventListener('click', scrollToIdOnClick);
});

function getScrollTopByHref(element){
	const id = element.getAttribute('href');
	return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(e){
	e.preventDefault();
	const to = getScrollTopByHref(e.target) - 80;

	scrollToPosition(to);
}

function scrollToPosition(to){
	// window.scroll({
	// 	top: to - 82,
	// 	behavior: "smooth"
	// });
	smoothScrollTo(0,to, 1000);
}

// Para compilar também em browsers antigos
function smoothScrollTo(endX, endY, duration) {
	const startX = window.scrollX || window.pageXOffset;
	const startY = window.scrollY || window.pageYOffset;
	const distanceX = endX - startX;
	const distanceY = endY - startY;
	const startTime = new Date().getTime();
  
	duration = typeof duration !== 'undefined' ? duration : 400;
  
	// Easing function
	const easeInOutQuart = (time, from, distance, duration) => {
	  if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
	  return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
	};
  
	const timer = setInterval(() => {
	  const time = new Date().getTime() - startTime;
	  const newX = easeInOutQuart(time, startX, distanceX, duration);
	  const newY = easeInOutQuart(time, startY, distanceY, duration);
	  if (time >= duration) {
		clearInterval(timer);
	  }
	  window.scroll(newX, newY);
	}, 1000 / 60); // 60 fps
};


// fim efeito de scroll suave
