const side = 25;
const boxside = 8;
const boxmargin = 3;

let r = 0;
let c = 0;
let anim = true;
let angle = 0;
let delay = 20;
let offset;
let boxes = [];

function setup() {
    createCanvas(600, 600);
    noStroke();

    offset = (600 - (side * boxside + (side - 1) * boxmargin)) / 2;

    for (let i = 0; i < side; i++) {
        boxes.push([]);
        for (let j = 0; j < side; j++) {
            let s = boxside;
            let x = j*boxside + j*boxmargin + offset;
            let y = i*boxside + i*boxmargin + offset;
            boxes[i].push({x: x, y: y, c: 150, s: s / 1.2});
        }
    }
}

function draw() {
    background(40, 48, 68);
    translate(width / 2, height / 2);
    rotate(angle);
    translate(-width / 2, - height / 2);

    for (let i in boxes) {
        for (let j in boxes[i]) {

            let d = 0;
            if (boxes[i][j].s != boxside)
                d = (boxside - boxes[i][j].s) / 2;

            boxes[i][j].s = lerp(boxes[i][j].s, boxside / 1.2, 0.08);

            fill(boxes[i][j].c);
            ellipse(boxes[i][j].x + d, boxes[i][j].y + d, boxes[i][j].s, boxes[i][j].s);
            ellipseMode(CORNER)
        }
    }

    if (frameCount % 2 == 0) {
        let rt = r;
        let ct = c;

        if (anim) {
            for (let i = rt; rt < c + 1; i++) {
                boxes[rt][ct].c = (angle == 0) ? color(247, 127, 0) : color(150);
                boxes[rt][ct].s = 18;
                rt += 1;
                ct -=1;
            }

            if (c < side - 1) c += 1;
            else if (r < side - 1) r += 1;
            else {
                anim = false;
                r = 0;
                c = 0;
            }

        } else if (delay > 0) {
            delay -= 1;
        } else {
            angle = (angle == 0) ? PI : 0;
            anim = true;
            delay = 20;
        }
    }
}
