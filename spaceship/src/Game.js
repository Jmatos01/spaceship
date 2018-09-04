import { Player } from './entities';

export default class Game {
    constructor(canvas, ctx){
        this.canvas = canvas;
        this.ctx = ctx;

        this.running = false;

        this.start();
    }
    init(){
        this.player = new Player(this.canvas, this.ctx);
        this.player.init();
    }
    start(){
        this.running = true;
        this.init();
        this.draw();
    }

    stop(){
        this.running = false;
    }
    draw(){
        if(!this.running){
            console.log('stop');
            return;
        }
        console.log('running');
        this.player.draw();

        window.requestAnimationFrame(() => this.draw());
    }

}
