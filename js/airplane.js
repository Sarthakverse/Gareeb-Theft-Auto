export default class Airplane {
    constructor(canvasWidth, canvasHeight, image) {
        this.image = image;
        this.position = {
            x: Math.random() * canvasWidth,
            y: Math.random() * canvasHeight
        };
        this.velocity = {
            x: (Math.random() - 0.5) * 2,
            y: (Math.random() - 0.5) * 2  
        };
    }
    update() {  
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
    draw(context) {  
        context.drawImage(this.image, this.position.x, this.position.y);
    }
}
