import Weapon from './Rocket';

export default class Weapon {
    constructor(canvas, ctx){
        this.canvas = canvas;
        this.ctx = ctx;


        this.rockets ={};
        this.ammo = 100;


    }
    shoot(x, y){
        if (this.ammo > 0){
            this.shooting[this.ammo] = new Rocket(this.canvas, this.ctx, x, y, this.ammo--);
        }       
    }
    draw(){
      for ( var n in this.shooting){
          this.shooting[n].draw
      }
    }
}
