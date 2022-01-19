leftW_x=0;
rightW_x=0;
difference=0;

function setup() {
    video=createCapture(VIDEO);
    video.size(400,400);
    video.position(100,190)
    canvas=createCanvas(500,500);
    canvas.position(600,190);
    model_attach=ml5.poseNet(video,model_loaded);
    model_attach.on("pose",got_results);
}

function model_loaded() {
    console.log("model has been loaded");
}
function draw() {
    background("white");
    fill("red");
    textSize(difference);
    text("Pearl",50,400);
    document.getElementById("font_size_span").innerHTML="Font Size Of The Text Is =" + difference;
}

function got_results(results) {
    if (results.length>0) {
        console.log(results);
         
        leftW_x=results[0].pose.leftWrist.x;
        rightW_x=results[0].pose.rightWrist.x;
        difference=floor(leftW_x-rightW_x);
    }
}