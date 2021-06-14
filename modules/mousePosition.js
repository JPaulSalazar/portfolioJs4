import{canvas}from './util.js';

function getMousePos(xRef, yRef){

    let canvasRect = canvas().getBoundingClientRect();//ubicacion del canvas segun la ventana del browser

    return {
    x: xRef - canvasRect.left,
    y: yRef - canvasRect.top
    //esta operacion ayuda a pasar la posicion del mouse del tamaño completo de la ventana del browser a solamente el contexto del canvas
    };
}

export{
    getMousePos
};