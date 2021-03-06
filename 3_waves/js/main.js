const CELLS = 25;
const BASE_RADIUS = 2;

let scl;
let X, Y, R;
let dots = [];
let angle = 0;

function setup() {
    createCanvas(600, 600);
    scl = floor(width / CELLS) * 0.75;

    for (let i = 0; i < CELLS; i++) {
        dots.push([]);
        for (let j = 0; j < CELLS; j++) {
            dots[i].push({x: j * scl, y: i * scl});
        }   
    }
}

function draw() {
    background(20);

    for (let i in dots) {
        for (let j in dots[i]) {
            X = dots[i][j].x + (width - (CELLS - 1) * scl) / 2;
            Y = dots[i][j].y + (width - (CELLS - 1) * scl) / 2;
            R = BASE_RADIUS + sin(angle);

            stroke(40 + R * 5,R * 80, R * 70);
            strokeWeight(R / 1.5)

            if (j != CELLS - 1) {
                line(X, Y, X + scl, Y);
            }

            if (i != CELLS - 1) {
                line(X, Y, X, Y + scl);
            }
            
            noStroke();
            fill(40 + R * 5,R * 80, R * 70);
            ellipse(X, Y, R * 2.5, R * 2.5);

            angle += 0.01005;
        }
        angle += 0.501;
    }
}