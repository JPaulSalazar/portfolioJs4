import Picture from './modules/picture.js';
import MouseBrush from './modules/mouseBrush.js';
import{canvas}from './modules/util.js';
import{getMousePos}from './modules/mousePosition.js';

const pictureSrc = './img/picture.jpeg';//defini el src de la imagen en una funcion por si se necesita cambiar en algun momento
const image = new Picture(pictureSrc);
const modal = document.querySelector('.contact__modal');
const modalOpen = document.querySelector('.about__container--button--anchor');
const ex = document.querySelector('.contact__modal--button--ex');
const body = document.querySelector('body');
const apiLink = 'https://api.github.com/users/JPaulSalazar/repos?per_page=10';
const exercisesList = document.querySelector('.exercises__container--list');
const video = document.querySelector('.home__background--video');
const buttonVideo = document.querySelector('.hero__button');
const videoText = document.querySelector('.hero__button--text');
const form = document.querySelector('.contact__modal--form');

// eventos para abrir y cerrar el modal
modalOpen.addEventListener('click', (event) => {
  event.preventDefault();
  modal.style.display = 'block';
  body.style.overflow = 'hidden';
});
ex.addEventListener('click', (event) => {
  event.preventDefault();
  modal.style.display = 'none';
  body.style.overflow = 'visible';
});
// evento para parar y reproducir el video
buttonVideo.addEventListener('click', (event) => {
  event.preventDefault();
	if (video.paused) {
		video.play();
    videoText.innerHTML = 'Pause video';
	} else {
		video.pause();
    videoText.innerHTML = 'Play video';
	}
});

// zona de añadir el github al html
const addProyects = (repository) => {
  repository.forEach (element => {
    const newRepo = `
    <li>
      <a href="${element.html_url}" target = "_blank">
        <img src="img/example.jpg" alt="code example">
        <h3>${element.name}</h3>
      </a>
    </li>
    `
    exercisesList.innerHTML += newRepo;
  });
}

fetch(apiLink, {
  method: "GET"
}).then((response) => {
    return response.json();
  }).then((data) => {
    addProyects(data);
  });

  //zona de validacion del formulario
function agregarMensajeDeError(camposInvalidos) {
  const errorElemnt = document.createElement("div");
  errorElemnt.classList.add("mensaje--error");

  const mensajeInvalidoTitulo = document.createElement("h4");
  mensajeInvalidoTitulo.innerText =
    "An error has occurred, check the following fields:";

  const listaInvalidoInput = document.createElement("ul");

  camposInvalidos.forEach((elementInvalido) => {
    const li = document.createElement("li");
    li.innerText = elementInvalido.getAttribute("name");

    listaInvalidoInput.appendChild(li);
  });

  errorElemnt.appendChild(mensajeInvalidoTitulo);
  errorElemnt.appendChild(listaInvalidoInput);

  form.parentNode.insertBefore(errorElemnt, form);
}

function agregarMensajeDeExito() {
  const validoElemnt = document.createElement("div");
  validoElemnt.classList.add("mensaje--valido");
  const mensajeValidoTitulo = document.createElement("h4");
  mensajeValidoTitulo.innerText = "Your message was sent successfully";
  validoElemnt.appendChild(mensajeValidoTitulo);
  form.parentNode.insertBefore(validoElemnt, form)
}

function dameLosCamposInvalidos(inputsRequeridos) {
  let invalidos = [];

  inputsRequeridos.forEach((actualInput) => {
    if (actualInput.value === "") {
      invalidos.push(actualInput);
      actualInput.style.border = "6px solid red";
    } else {
      actualInput.style.border = "";
    }
  });
  console.log(invalidos)
  return invalidos;
}

function reiniciarMensajesDeError() {
  const mensajeDeErrror = document.querySelector(".mensaje--error");
  if (mensajeDeErrror) {
    mensajeDeErrror.remove();
  }

  const mensajeDeExito = document.querySelector(".mensaje--valido");
  if (mensajeDeExito) {
    mensajeDeExito.remove();
  }
}

form.addEventListener("submit", (e) => {
  reiniciarMensajesDeError();

  const inputsRequeridos = document.querySelectorAll(".required");

  e.preventDefault();

  const invalidos = dameLosCamposInvalidos(inputsRequeridos);
  console.log(invalidos);
  // Si tenemos campos invalidos
  if (invalidos.length > 0) {
    agregarMensajeDeError(invalidos);
  } else {
    agregarMensajeDeExito();
  }
});

//proyecto 1 de js4

image.picture.addEventListener('load', () => {
    //image.picture es la imagen definida en la clase Picture
    image.draw();
})

canvas().addEventListener('mousemove', function(e) {
    let mouseRadius = 40;//radio que define el tamaño del pincel o circulo que se usa para decubrir la ilustracion
    let mousePos = getMousePos(e.clientX, e.clientY);// aca sepasan los parametros de en que punto se encuenta el mouse segun la ventana del browser
    let mouseEraser = new MouseBrush(mousePos.x, mousePos.y, mouseRadius);
    mouseEraser.draw();
});
