class Bubble {
    constructor(tempX, tempY, tempR) {
        this.x = tempX;
        this.y = tempY;
        this.r = tempR;
    }
    show() {
        stroke(255);
        strokeWeight(4);
        noFill();
        // noStroke();
        // fill(255, 10);
        ellipse(this.x, this.y, this.r * 2);
    }
    move() {
        this.x += random(-5, 5);
        this.y += random(-5, 5);
    }
}