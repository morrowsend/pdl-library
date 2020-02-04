// filename: ElAddLoopParallelPID

var  combineLoop=false;

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/Jost-300-Light.ttf");
	italicFont= loadFont("../__support/Jost-300-LightItalic.ttf");
	titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}

function setup(){
    createCanvas(800, 400);
    smooshbutton = createButton("put together");
    smooshbutton.position(50, 342);
    smooshbutton.mousePressed(smoosh);
    smooshbutton.class("PDLbutton");
}

function draw() {
    background(cWhite);

    if(combineLoop==true){
        smooshbutton.html("take apart");
        push();
            translate(50, 200);
            circuitParallel("bulb");
            translate(55,30);
            power(3);
            translate(0,30);
            power(3);
            translate(220,0);
            power(3);
            translate(215,-30);
            power(3);
        pop();
    }

    if(!combineLoop){
        smooshbutton.html("put together");
        push();
            translate(50, 200);
            circuitSimple("bulb");
            translate(55,0);
            power(3);
            translate(220,0);
            power(3);
        pop();
        push();
            translate(400, 200);
            circuitSimple("bulb");
            translate(55,30);
            power(3);
            translate(220,0);
            power(3);
        pop();
    }
    titleBold("Combining and separating two complete loops");
}

function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}

function smoosh() {
       combineLoop=!combineLoop;
    }
