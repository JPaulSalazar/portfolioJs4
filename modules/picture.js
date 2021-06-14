import{canvas, ctx}from './util.js';

class Picture{
    constructor(pictureSrc){
        this.picture = new Image();// se usa new image para que this.picture se intancie como imagen
        this.picture.src = pictureSrc;
    }

    draw(){
        ctx().drawImage(this.picture, 0, 0, canvas().width, canvas().height)
    }
}

export default Picture;