var vid;
var playing = false;
var completion;
function setup() {
  createCanvas(500, 200);
  vid = createVideo("subway.mp4");
  vid.size(500, 400);
}
function draw() {
  background(50);
  completion = vid.time() / vid.duration();
  ellipse(completion*width, 70, 10, 30);
}
function mousePressed() {
  if (!playing) {
    vid.play();
    vid.time((mouseX/width) * vid.duration());
    playing = true;
  }
  else {
    vid.pause();
    playing = false;
  }
}
