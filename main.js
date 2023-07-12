nosex=0;
nosey=0;

function preload() {
    mafiaHat = loadImage("chapeu.png");
    bigodon = loadImage("mustache.png")
}

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture (VIDEO);
    video.size(500, 500)
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('poseNait foi iniciada');
}

function gotPoses (results)
{
    if(results.length > 0)
    {
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y; 
    }
}

function draw() {
    image(video, 0, 0, 500, 500);
    image(mafiaHat, nosex-100, nosey-220, 200, 200)
    image(bigodon, nosex-45, nosey-0, 90, 90)
}

function takeSnapshot() {
    save ('minhaFotinhaLinda😎😎😎😎😎😎😎😎.png');
}