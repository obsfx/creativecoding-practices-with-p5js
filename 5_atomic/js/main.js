let a       = 0.1,
    colors  = ["#A20021", "#1B065E", "#8B2635", "#177E89"],
    A ,B ,C;

function setup() {
    createCanvas(600, 600, WEBGL);
    noStroke();
    smooth();
    A = new s(0, 0, 75);
}

function draw() {
    background(240);

    camera( cos(a) * 200, sin(a) * 200, (height / 2) / tan(PI / 6),
            cos(a / 2) * 75, 0, cos(a / 2) * 50,
            cos(a) / 5, 1, -sin(a) / 5
        );

    ambientLight(100);

    directionalLight(255, 255, 255, -1, -1, 0.25);
    directionalLight(0, 255, 0, -1, -1, 0.25);
    directionalLight(255, 255, 0, 1, -1, 0.25);

    pointLight(255, 255, 255, -100, -400, 400);
    pointLight(255, 255, 255, 100, -400, 400);

    pointLight(255, 253, 130, cos(a) * 200, sin(a) * 200, 400);

    A.draw();

    a += 0.015;
}

function s(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
}

s.prototype.draw = function() {
    push();
    translate(this.x, this.y, this.z);

    specularMaterial(colors[0]);
    sphere(20 + sin(a * 1.25) * 5, 40, 40);

    push(); 
    translate(20, 20, 5);
    specularMaterial(colors[0]);
    sphere(20 + sin(a * 1.25) * 2, 40, 40);
    pop();

    push(); 
    translate(0, 35, 5);
    specularMaterial(colors[0]);
    sphere(20 + sin(a * 1.7) * 3, 40, 40);
    pop();

    push(); 
    translate(0, 10, 25);
    specularMaterial(colors[1]);
    sphere(20 + sin(a * 1.5) * 4, 40, 40);
    pop();

    push(); 
    translate(0, 25, 25);
    specularMaterial(colors[0]);
    sphere(20 + sin(a * 1.25) * 5, 40, 40);
    pop();

    push(); 
    translate(20, 25, 25);
    specularMaterial(colors[1]);
    sphere(20 + sin(a * 1.2) * 4, 40, 40);
    pop();

    push(); 
    translate(20, 10, 20);
    specularMaterial(colors[1]);
    sphere(20 + sin(a) * 4, 40, 40);
    pop();

    /************************ */
    push();
    rotateY(PI / 2.50);
    specularMaterial(colors[2]);
    torus(150, 2, 80, 24);

    translate(cos(a) * 150, sin(a) * 150);
    specularMaterial(colors[3]);
    sphere(10, 40, 40);
    pop();

    push();
    rotateY(PI / 2.4);
    rotateX(PI / 1.5);
    specularMaterial(colors[2]);
    torus(150, 2, 80, 24);

    translate(cos(a + 0.4) * 150, sin(a + 0.4) * 150);
    specularMaterial(colors[3]);
    sphere(10, 40, 40);
    pop();

    push();
    rotateY(PI / 2.6);
    rotateX(PI / 3.5);
    specularMaterial(colors[2]);
    torus(150, 2, 80, 24);

    translate(cos(a + 0.8) * 150, sin(a + 0.8) * 150);
    specularMaterial(colors[3]);
    sphere(10, 40, 40);
    pop();

    pop();
}