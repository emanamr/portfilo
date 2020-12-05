AOS.init({
    duration:1200
});

var app = document.getElementById('typewriter');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Krishnan, Gopi').start();