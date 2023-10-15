export default class Sprite {
    constructor({ position, image }) {
        this.position = position
        this.image = image
    }
    draw(context) {
        context.drawImage(this.image, this.position.x, this.position.y)
    }
}