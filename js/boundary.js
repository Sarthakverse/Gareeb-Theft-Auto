export default class Boundary {
    static width = 40
    static height = 40
    constructor({ position }) {
        this.position = position
        this.width = 40  // 16 pixel * 250% zoom level = 4000
        this.height = 40 // 16 pixel * 250% zoom level = 4000
    }

    //drawing the rectangles of collision
    draw(context) {
        context.fillStyle = 'rgba(0,0,0,0)'
        context.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}