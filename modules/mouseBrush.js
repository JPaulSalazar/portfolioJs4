import{ctx}from './util.js';

class MouseBrush{

    constructor(mouseX, mouseY, mouseR){
        
    this.positionX = mouseX;
    this.positionY = mouseY;
    this.radius = mouseR;
    }

    draw(){

        ctx().beginPath();
        ctx().arc(this.positionX, this.positionY, this.radius, 0, 2*Math.PI);
        ctx().fillStyle = '#000';
        ctx().globalCompositeOperation = 'destination-out';// esto funciona como una mascara para descubrir el dibujo que se encuentra como background en el canvas mediante css 
        ctx().fill();
    }
}

export default MouseBrush;