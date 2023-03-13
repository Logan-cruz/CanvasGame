

class Sprite {
    constructor({ position, velocity, height, color = 'red' }) {
        this.height = 150
        this.position = position
        this.velocity = velocity
        this.lastKey
        this.isAttacking
        this.time = 0
        this.width = 0
        this.length = 0
        this.hitbox = {
            position: this.position,
            width: this.width,
            length: this.length
        }
        this.color = color
    }
    draw() {
        v.fillStyle = this.color
        v.fillRect(this.position.x, this.position.y, 40, 150, this.height)
    }
    update() {

        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        if (this.position.y + this.height + this.velocity.y >= canvas.height) {
            this.velocity.y = 0
        }
        else {
            this.velocity.y += gravity
        }
    }
    attackBox() {
        if (keys.p.pressed && lastKey === 'p') {

            v.fillStyle = 'green'
            v.fillRect(
                this.position.x + 50,
                this.position.y + 30,
                this.width + 80,
                this.height
            )

        }

    }
}
const gravity = 0.6
const canvas = document.querySelector('canvas')
const v = canvas.getContext('2d');
const player1 = new Sprite({
    position: {

        x: 0,
        y: 0
    },
    velocity: {
        x: 0,
        y: 2.5
    },
    color: 'Yellow'

})
const enemy = new Sprite({
    position: {

        x: 450,
        y: 100
    },
    velocity: {
        x: 0,
        y: 2.5
    },
    color: 'blue'
})
canvas.width = 1800
canvas.height = 900
v.fillRect(0, 0, canvas.width, canvas.height)

console.log(player1)

const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    ArrowLeft: {
        pressed: false
    },
    ArrowRight: {
        pressed: false
    },
    ArrowUp: {
        pressed: false
    },
    p: {
        pressed: false
    },
    w: {
        pressed: false
    },
    s: {
        pressed: false
    },
    o: {
        pressed: false
    },
    z: {
        pressed: false
    },
    x: {
        pressed: false
    }
}
var lastKey
function animate() {
    v.fillStyle = 'black'
    window.requestAnimationFrame(animate)
    v.fillRect(0, 0, canvas.width, canvas.height)
    player1.update()
    enemy.update()
    player1.velocity.x = 0
    enemy.velocity.x = 0
    //player 1 movement
    if (keys.a.pressed && lastKey === 'a') {
        player1.velocity.x = -6
    } else if (keys.d.pressed && lastKey === 'd') {
        player1.velocity.x = 6
    }
    //else if (keys.w.pressed && lastKey ==='w'){
    //  player1.velocity.y = 1
    //}
    //Enemy movements
    if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft') {
        enemy.velocity.x = -6
    } else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight') {
        enemy.velocity.x = 6
    }
    if (keys.p.pressed && lastKey === 'p') {
        
        player1.attackBox() 
    }
}
animate()

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'd':
            keys.d.pressed = true
            lastKey = 'd'
            break
        case 'a':
            keys.a.pressed = true
            lastKey = 'a'
            break
        case 'w':
            player1.velocity.y = -17
            let
            break
        case 'p':
            keys.p.pressed = true
            lastKey = 'p'
            console.log(lastKey)
            break
    }
    switch (event.key) {


        case 'ArrowRight':
            keys.ArrowRight.pressed = true
            enemy.lastKey = 'ArrowRight'
            break
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true
            enemy.lastKey = 'ArrowLeft'

            break
        case 'ArrowUp':
            enemy.velocity.y = -17
            break
        case 'z':
            keys.z.pressed = true
            enemy.lastKey = 'z'
            break
        case 'x':
            keys.x.pressed = true
            enemy.lastKey = 'x'
            break
    }

})
window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'd':
            keys.d.pressed = false
            break
        case 'a':
            keys.a.pressed = false
            break
        case 'w':
            keys.w.pressed = false
            break
        case 'p':
            keys.p.pressed = false
            break
        case 'o':
            keys.o.pressed = false
            break


    }
    //for the enemy
    switch (event.key) {
        case 'ArrowRight':
            keys.ArrowRight.pressed = false
            break
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false
            break
        case 'ArrowUp':
            keys.ArrowUp.pressed = false
            break
        case 'z':
            keys.z.pressed = false
            break



    }
    console.log(event.key)
})