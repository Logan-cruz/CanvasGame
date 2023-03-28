


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
    jump() {
        console.log(isOnGround);
            if (jumpcounter < 2) {
            player1.velocity.y = -18
            jumpcounter++
            isOnGround = false
        }

    }
    jump1(){
        console.log(isOnGround1);
        if (jumpcounter1<2){
            enemy.velocity.y = -19
            jumpcounter1++
            isOnGround1 = false
        }
    }
    draw() {
        v.fillStyle = this.color
        v.fillRect(this.position.x, this.position.y, 40, 150, this.height)
    }
    update() {
        player1.draw()
        player1.position.x += player1.velocity.x
        player1.position.y += player1.velocity.y
            
        
        if (player1.position.y + player1.height + player1.velocity.y >= canvas.height - 10) {
            player1.velocity.y = 0
            isOnGround = true

            
        }
        else if(keys.s.pressed && lastKey ==='s'){
            player1.velocity.y += gravity + 2
    
        }
        else {
            player1.velocity.y += gravity 
        }
    }
    update1(){
        enemy.draw()
        enemy.position.x += enemy.velocity.x
        enemy.position.y += enemy.velocity.y
        if (enemy.position.y + enemy.height + enemy.velocity.y >= canvas.height - 10) {
            enemy.velocity.y = 0
            isOnGround1 = true
            
        }
        else if(keys.ArrowDown.pressed && enemy.lastKey ==='ArrowDown'){
            enemy.velocity.y += gravity1 + 0.5
        }
        else {
            enemy.velocity.y += gravity1 
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
const gravity = 0.5
const gravity1 = 0.4
const canvas = document.querySelector('canvas')
const v = canvas.getContext('2d');
var jumpcounter = 0
var jumpcounter1 = 0
var isOnGround = false
var isOnGround1 = false
const player1 = new Sprite({
    position: {

        x: 0,
        y: 0
    },
    velocity: {
        x: 5,
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
        x: 2,
        y: 2.4
    },
    color: 'orange'
})
canvas.width =1900;
canvas.height =950;
v.fillRect(0, 0, canvas.width, canvas.height)

console.log(player1,enemy)

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
    ArrowDown:{
        pressed:false
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
function d(){
    var nineFrames
    nineFrames++
    return nineFrames
}
var lastKey
function animate() {
    v.fillStyle = 'black'
    window.requestAnimationFrame(animate)
    v.fillRect(0, 0, canvas.width, canvas.height)
    if (isOnGround === true ) {
        jumpcounter = 0
    }
    if (isOnGround1 === true ) {
        jumpcounter1 = 0
    }
    var frames 
    var nineFrames
    frames++
    player1.update()
    enemy.update1()
    player1.velocity.x = 0
    enemy.velocity.x = 0
    
    //player 1 movement
    if (keys.a.pressed && lastKey === 'a') {
        player1.velocity.x = -15
    } else if (keys.d.pressed && lastKey === 'd') {
        player1.velocity.x = 15
    }
    //else if (keys.w.pressed && lastKey ==='w'){
    //  player1.velocity.y = 1
    //}
    //Enemy movements
    if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft') {
        enemy.velocity.x = -10
    } else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight') {
        enemy.velocity.x = 10
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
            keys.w.pressed=true
            player1.jump()
            break

        case 'p':
            keys.p.pressed = true
            lastKey = 'p'
            console.log(lastKey)
            break
            case 's':
                keys.s.pressed=true
                lastKey='s'
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
            keys.ArrowDown.pressed=true
            enemy.jump1()
            break
        case 'z':
            keys.z.pressed = true
            enemy.lastKey = 'z'
            break
        case 'x':
            keys.x.pressed = true
            enemy.lastKey = 'x'
            break
            case 'ArrowDown':
                keys.ArrowDown.pressed = true
                enemy.lastKey = 'ArrowDown'
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
        case 's':
            keys.s.pressed=false
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
            case 'ArrowDown':
            keys.ArrowDown.pressed = false
            break



    }
    console.log(event.key)
})