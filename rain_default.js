var bubbles = [];
var frame = 0;
function setup() {
    createCanvas(1920, 974);
}
function draw() {
    background(0);
    for (var i = bubbles.length - 1; i >= 0; i--) {
        bubbles[i].move();
        bubbles[i].display();
        if (bubbles[i].isFinished()) {
            bubbles.splice(i, 1);
        }
    }
    if(frame % 5 == 0) {
        for (var i = 0; i < width / 18; i++) {
            var r = random(0.5, 1);
            bubbles.push(new Bubble(i* 20, random(-10, -100), -1, random(10, 15), frame, r));
        }
    }
    frame = frame + 1;
}
function Bubble(x, y, xi, yi, indexx, radius) {
    this.x = x;
    this.y = y;
    this.xi = xi;
    this.yi = yi;
    this.radius = radius;
    this.alpha = map(this.radius, 0.5, 1, 10, 190);
    this.indexx = indexx;
    
    this.display = function() {
        noStroke();
        fill(64, 164, 223, this.alpha);
        ellipse(this.x, this.y, this.radius * 25, this.radius * 30);
    }
    
    this.move = function() {
        this.x = this.x + xi;
        this.y = this.y + yi;
    }
    this.isFinished = function() {
        if (this.y > height) {
            return true;
        }
        else {
            return false;
        }
    }
}