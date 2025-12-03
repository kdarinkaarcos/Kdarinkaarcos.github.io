var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});
// Comentario
typewriter.typeString('Desarrolladora Frontend Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡Imagina, crea, programa: construyendo el futuro!')
    .pauseFor(2500)
    //numero de caracteres que se borraran 
    .deleteChars(23)
    .typeString('<strong>codificando sueños!</strong>')
    .pauseFor(2500)
    .start();

