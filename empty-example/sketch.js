let angle = 0;
let waves = [];

function setup() {
    createCanvas(innerWidth, innerHeight)
    slider = createSlider(1, 10, 1)
}

function draw() {
    background(51)
    translate(innerWidth / 4, innerHeight / 2);

    let x = 0;
    let y = 0;
    for (let i = 0; i < slider.value(); i++) {

        let prevX = x;
        let prevY = y;
        let n = i * 2 + 1;
        let radius = 150 * (4 / (n * PI));
        x += radius * cos(n * angle);
        y += radius * sin(n * angle);
       

        //point moving
        fill(255)
        stroke(255)
        line(prevX, prevY, x, y);
        

        //big circle
        stroke(255, 100)
        noFill()
        ellipse(prevX, prevY, radius * 2);

    }
    waves.unshift(y);

    translate(300, 0)
    stroke(255)
    line(x - 300, y, 0, waves[0]);
    beginShape()
    for (let i = 0; i < waves.length; i++) {
        vertex(i, waves[i])
    }
    endShape()

    angle += 0.04;
    if (waves.length > 400) {
        waves.pop();
    }
}