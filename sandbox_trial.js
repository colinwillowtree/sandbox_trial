const p5Container = document.querySelector("#p5-container");
let w = p5Container.clientWidth;
let h = p5Container.clientHeight;
// let img;

// function preload() {
//   img = loadImage("assets/hologram.jpg");
// }

function setup() {
  let cnv = createCanvas(w, h);
  cnv.parent(p5Container);
  cnv.style("position", "absolute");
  cnv.style("inset", 0);
  cnv.style("z-index", -1);
  //document.body.style.overflow = "hidden";
  rectMode(CENTER);
  textAlign(CENTER);
}

function draw() {
  //background(51);
  // image(img, width / 2, height / 2);
  clear();
  noStroke();
  fill(255, 200, 200, 150);

  translate(width / 2, height / 2);

  var trans1 = sin(frameCount / 200.0) * 50;
  var trans2 = sin(frameCount / 300.0) * 75;
  var trans3 = sin(frameCount / 400.0) * 100;

  var rot1 = radians(frameCount / 10.0);
  var rot2 = radians(frameCount / 8.0);
  var rot3 = radians(frameCount / 6.0);

  for (var i = 0; i < 6; i++) {
    rotate(rot1);
    push();
    rotate(radians((360 * i) / 6));
    translate(trans1, 0);
    ellipse(0, 0, 28, 28);

    rotate(rot2);
    for (var j = 0; j < 6; j++) {
      push();
      rotate(radians((360 * j) / 6));
      translate(trans2, 0);
      ellipse(0, 0, 14, 14);

      rotate(rot3);
      for (var k = 0; k < 6; k++) {
        push();
        rotate(radians((360 * k) / 6));
        translate(trans3, 0);
        ellipse(0, 0, 7, 7);
        pop();
      }
      pop();
    }

    pop();
  }
}

function windowResized() {
  w = p5Container.clientWidth;
  h = p5Container.clientHeight;
  resizeCanvas(w, h);
}
