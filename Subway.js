var vid;
var playing = false;
var completion;
function setup() {
  createCanvas(500, 100);
  vid = createVideo("Subway.mp4");
  vid.size(500, 400);
}
function draw() {
  background('#222222');
  completion = vid.time() / vid.duration();
  ellipse(completion*width, 50, 50, 50);
  var c = color(255, 204, 0);
  fill(c);
  noStroke();
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
