function preload(){

classifier = ml5.imageClassifier('DoodleNet');

}

function draw(){

strokeWeight(5);
stroke('black');
if(mouseIsPressed){
    line(pmouseX, pmouseY, mouseX, mouseY);
}

}

function setup(){

canvas = createCanvas(350, 350);
canvas.center();
canvas.mouseReleased(classifyCanvas);
synth = window.speechSynthesis;

}

function classifyCanvas(){

classifier.classify(canvas, gotResult);

}

function gotResult(error, results){

if(error){
console.log(error);
}

else{
console.log(results);

document.getElementById("label_span").innerHTML = results[0].label;
 confi = Math.round(results[0].confidence*100);
document.getElementById("confidence_span").innerHTML = confi + " % "; 

utterThis = new SpeechSynthesisUtterance("Sketch detected is " + results[0].label);
synth.speak(utterThis);

}


}

function clear_canvas(){

background("white")

}