var bubbles = [];

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
    bubbles.push(new Bubble(mouseX, mouseY, random(-3, 3), random(10, 15)));
}

function Bubble(x, y, xi, yi) {
    this.x = x;
    this.y = y;
    this.xi = xi;
    this.yi = yi;
    this.alpha = random(50, 140);
    this.display = function() {
        noStroke();
        fill(64, 164, 223, 100);
        ellipse(this.x, this.y, random(20, 25), random(25, 30));
    }
    
    this.move = function() {
        this.x = this.x + random(0, 1 * xi);
        this.y = this.y + yi
    }
    this.isFinished = function() {
        if (this.y >= height + 20) {
            return true;
        }
        else{
            return false;
        }
    }
}
