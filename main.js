noseX=0;
noseY=0;
diffrence=0;
rightWristX=0;
leftWristX=0;



function draw(){
    background('#969A97');

    document.getElementById("square_side").innerHTML="Width And Height of a Square will be = " + diffrence+ "px";
    fill('#F90093');
    stroke('#F90093')
     square(noseX, noseY, diffrence);
}

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 550);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


function modelLoaded() {
    console.log('posenet is initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +" noseY = " +noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        diffrence = floor (leftWristX - rightWristX);

        console.log("leftWristX = "+ leftWristX + "rightWristX = " + rightWristX + "diffrence = " + diffrence);


    }
}