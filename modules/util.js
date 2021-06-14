const canvas = () => {
    const getCanvas = document.querySelector('canvas');
    return getCanvas;
    
}

const ctx = () => {
    const getContext = canvas().getContext('2d');
    return getContext;
}

export {
    canvas,
    ctx,
};

//Anreriormente cree una funcion como la vista en clase para las particulas que me diera el contexto del canvas, sin embargo, yo necesitaba el tmaño del canvas y el contexto en diferentes lugares entonces realice estas funciones por separado. 