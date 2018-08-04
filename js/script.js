let hero;
let oboi;
let am;
let x;
let dx = 10;
let y = 0;
let dy = 10;
let d = 0;
let b = 0;
let ex = 0;
let ey = 0;
let h = 0;
let dh = 0;

function setup() {
	createCanvas(800, 800);
	d= random(100, 700);
  b = random(100, 700);
  ex = random (100, 400);
  ey = random (100, 400);
  noStroke();
  h = 100;
}
	
function preload() {  // preload() runs once
	  hero = loadImage("hero.png");
  oboi = loadImage("oboi.jpg");
  am = loadImage("am.png");
		}

function draw () {
  background ('#8CA090');
  oboi.resize(800, 800);
  background(oboi);
  oboi.resize(800, 800);
  background(oboi);
  hero.resize(0, 110);
  image(hero, x, y);
  am.resize (0, 95);
	image (am, d, b);
	rect (width - 130, 30, h, 30);
  if (x > ex) {
    ex = ex + 1;
  } else if (x < ex) {
    ex = ex - 1;
  }
  if (y > ey) {
    ey = ey + 1;
  } else if (y < ey) {
    ey = ey - 1;
  }
  rect(ex, ey, 75, 75);
  if (x > ex -30 && x < ex + 30) {
    if (y > ey - 30 && y < ey + 30) {
      dh = dh - 1;
    }
  }

  //кушанье
  if (x > d - 35 && x < x + 35) {
    if (y > b - 35 && y < y + 35) {
      d = random (100, 700);
      b  = random (100, 700);
      dh = dh + 20;
    }
  }

  //условие поражения
  if (h <= 0) {
    background(oboi);
    textSize(100);
    text("ЛОЛ", 300, 400);
    h = 0;
    rect (width - 130, 30, h, 30);
  } else {
    //оставшиеся жиги
    fill('#C62EC6');
    h = 100 - 5 * millis() / 1000 + dh;
    if (h > 100) {
let k =  h % 100;
      
    }
    
  }
}

function  keyPressed() {
  if (keyCode==RIGHT_ARROW) {
    x = x + dx;
  }  
  if (keyCode == LEFT_ARROW) {
    x= x - dx;
  } 
  if (keyCode == DOWN_ARROW) {
    y = y + dy;
  }  
  if (keyCode == UP_ARROW) {
    y = y - dy;
  }
  //if (keyCode == 'W' ) {
  //}
}