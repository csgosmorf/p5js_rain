var bubbles = [];
var frame = 0;
var red = 1;
var green = 1;
var blue = 1;
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
            var radius = random(0.5, 1);
            var rainbow = int(random(1, 7));
            if(rainbow == 1) {
                red = 255;
                green = 0;
                blue = 0;
            }
            else if (rainbow == 2) {
                red = 255;
                green = 127;
                blue = 0;
            }
            else if (rainbow == 3) {
                red = 255;
                green = 255;
                blue = 0;
            }
            else if (rainbow == 4) {
                red = 0;
                green = 255;
                blue = 0;
            }
            else if (rainbow == 5) {
                red = 0;
                green = 0;
                blue = 255;
            }
            else if (rainbow == 6) {
                red = 75;
                green = 0;
                blue = 130;
            }
            else {
                red = 148;
                green = 0;
                blue = 211;
            }
            bubbles.push(new Bubble(i* 20, random(-10, -100), -1, random(10, 15), frame, radius, red, green, blue));
        }
    }
    frame = frame + 1;
}
function Bubble(x, y, xi, yi, indexx, radius, r, g, b) {
    this.x = x;
    this.y = y;
    this.xi = xi;
    this.yi = yi;
    this.radius = radius;
    this.alpha = map(this.radius, 0.5, 1, 10, 190);
    this.indexx = indexx;
    this.r = r;
    this.g = g;
    this.b = b;
    
    this.display = function() {
        noStroke();
        fill(this.r, this.g, this.b, this.alpha);
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