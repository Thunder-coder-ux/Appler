x = 0;
y = 0;

cirl = "";
rec = "";
sqr = "";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML = "System is Listening, Please speak...";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);


var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "Speech is recognised as " + content;
    if( content == "Circle"){
        y = Math.floor(Math.random() * 900);
        x = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Stared to draw a circle....";
        cirl = "set";
    }
    if( content == "rectangle"){
        y = Math.floor(Math.random() * 900);
        x = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Stared to draw a rectangle....";
        rec = "set";
    }
    if( content == "Square"){
        y = Math.floor(Math.random() * 900);
        x = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Stared to draw a square....";
        sqr = "set";
    }
}

    function setup(){
        canvas = createCanvas(901, 621);
    }

function draw(){
    if(cirl == "set"){
        radius = Math.floor(Math.random() * 100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML = "A circle has been drawn.";
        cirl = "";
    }
    if(rec == "set"){
        rect(x, y, 70, 50);
        document.getElementById("status").innerHTML = "A rectangle has been drawn.";
        rec = "";
    }
    if(sqr == "set"){
        side = Math.floor(Math.random() * 100)
        rect(x, y, side, side);
        document.getElementById("status").innerHTML = "A square has been drawn.";
        sqr = "";
    }
}