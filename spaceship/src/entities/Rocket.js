export default class Rocket {
  constructor(canvas, ctx, x, y, n) {
    this.x = x;
    this.y = y;

    this.img = new Image();
    this.img.src = "./images/spaceship.png";

    this.canvas = canvas;
    this.ctx = ctx;

    this.width = 60;
    this.height = 11;

    this.velocity = 6;
    this.damage = 100;
    this.number = n;
    this.init();
  }
  init() {
    this.img = new Image();
    this.img.src = "./images/rocket.png";
    this.img.onload = () => {
        this.draw();
    };
  }
  draw(destroy) {
    let x = this.x;
    let y = this.y;
    
    

    if((this.x + this.width)<this.canvas.width){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.img, x, y, this.width, this.height);
    this.x += this.velocity;
   
    }
    else{
        let explode = new Audio ('audio/explosion.wav');
        explode.play();
        destroy();
    }
  }
}