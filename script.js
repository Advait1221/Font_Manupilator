noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
yourname="";
function setup() {

    Canvas=createCanvas(550,550);
    Canvas.position(560,150);
    video = createCapture(VIDEO);
    video.size(600,500);
    
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}

function modelLoaded(){
    console.log("model is ready");
}

function gotposes(results){
    if(results.length>0){
        console.log(results)
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nosex="+noseX,"nosey="+noseY);
        rightWristX=results[0].pose.rightWrist.x;
        leftWristX=results[0].pose.leftWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("leftwristx-"+leftWristX,"rightwristx-"+rightWristX);
    }
}
function inputname(){
    yourname=document.getElementById("inputyourname").value;
    console.log(yourname);
}
function draw(){
    background('#969A97');
    document.getElementById("square_side").innerHTML="Size of text will be  = "+difference+"px"
    fill('red');
  stroke('#F90093');
  textSize(difference);
  text(yourname,noseX,noseY);
}
    