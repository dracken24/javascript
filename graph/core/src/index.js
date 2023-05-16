import Phaser from 'phaser';
import player1 from './assets/bar_red_00.png';
import player2 from './assets/bar_red_00.png';
import bl from './assets/ball_red_00.png';
import background from './assets/terrain_pong_01.png';

//--------------------------------------------- class ------------------------------------------------//

class Vec2 {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

class Rect {
	constructor(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}
}

class HitPoint {
	constructor(rect1, rect2, pos, side) {
		this.rect1 = rect1;
		this.rect2 = rect2;
		this.pos = pos;
		this.side = side;
	}
}

class Player {
	constructor(hit, imgLink, obj) {
		this.hitPoint = hit;
		this.imgLink = imgLink;
		this.obj = obj;
	}
}

//--------------------------------------------- Vars -------------------------------------------------//

let p1 = new Player([0, 0], player1, 0);
let p2 = new Player([0, 0], player2, 0);

let ball = new Player([0, 0], player2, 0);

let ctUpP1 = 0;
let ctDownP1 = 0;
let ctUpP2 = 0;
let ctDownP2 = 0;

let ctBall = -1;

//----------------------------------------- catch key events ------------------------------------------//
// Add event listener on keydown

document.addEventListener('keydown', (event) => {
	MovePlayerDown(event);
}, true);
document.addEventListener('keyup', (event) => {
	MovePlayerUp(event);
}, true);

//----------------------------------------------- class -----------------------------------------------//

class MyGame extends Phaser.Scene
{
	constructor ()
	{
		super();
	}

	preload ()
	{
		this.load.image('p1', p1.imgLink);
		this.load.image('p2', p1.imgLink);
		this.load.image('ball', bl);
		this.load.image('background', background);
	}

	create ()
	{
		const bg = this.add.image(600, 400, 'background');

		p1.obj = this.add.image(1170, 400, 'p1');

		p2.obj = this.add.image(30, 400, 'p2');

		ball.obj = this.add.image(600, 400, 'ball');
		// ball.setCollideWorldBounds(true);	// rebound in screen side

		// this.tweens.add({
		// 	targets: p1,
		// 	y: 0,
		// 	duration: 2000,
		// 	ease: "",
		// 	yoyo: true,
		// 	loop: 0
		// });
	}

	update()
	{
		ControlP1();
		ControlP2();

		BallControl();

		CheckCollision();
	}
}

const config = {
	type: Phaser.AUTO,
	parent: 'phaser-example',
	width: 1200,
	height: 800,
	// physics: {
	// 	default: 'arcade',
	// 	arcade: {
	// 	  gravity: { }, // Ajoutez les propriétés de physique nécessaires
	// 	  // Autres options de configuration de la physique
	// 	}
	// },
	scene: MyGame
};

const game = new Phaser.Game(config);

//---------------------------------------------- Execution ----------------------------------------------//

function MovePlayerDown(event) {
	const keyPressed = event.key;
	console.log("You hit Down: " + keyPressed);

	// P1 up and down ct
	if (keyPressed === 'o') {

		ctUpP1 = 1;
	}
	if (keyPressed === 'l') {
		ctDownP1 = 1;
	}


		// P2 up and down ct
	if (keyPressed === 'w') {
		ctUpP2 = 1;
	}
	if (keyPressed === 's') {
		ctDownP2 = 1;
	}

	if (keyPressed === 'z') {
		ctBall = ctBall * -1;
	}
}

function MovePlayerUp(event) {
	const keyPressed = event.key;
	console.log("You hit Up: " + keyPressed);

	// P1 up and down
	if (keyPressed === 'o') {
		ctUpP1 = 0;
	}
	if (keyPressed === 'l') {
		ctDownP1 = 0;
	}

	// P2 up and down
	if (keyPressed === 'w') {
		ctUpP2 = 0;
	}
	if (keyPressed === 's') {
		ctDownP2 = 0;
	}
}

function BallControl() {
	if (ctBall == 1) {
		ball.obj.x -= 2;
	}
	else if (ctBall == -1) {
		ball.obj.x += 2;
	}
}

function ControlP1() {
	// p1 up down
	if (ctUpP1 == 1 && p1.obj.y > 84) {
		p1.obj.y -= 2;
	}
	if (ctDownP1 == 1 && p1.obj.y < 717) {
		p1.obj.y += 2;
	}
}

function ControlP2() {
	// p2 up down
	if (ctUpP2 == 1 && p2.obj.y > 84) {
		p2.obj.y -= 2;
	}
	if (ctDownP2 == 1 && p2.obj.y < 717) {
		p2.obj.y += 2;
	}
}

function CheckCollision() {
	if (Phaser.Geom.Intersects.RectangleToRectangle(ball.obj.getBounds(), p1.obj.getBounds())) {
		// Collision detected player1 and ball
		
		p1.hitPoint = Phaser.Geom.Intersects.GetRectangleToRectangle(p1.obj.getBounds(), ball.obj.getBounds());
		// p1.hitPoint.y = Phaser.Geom.Intersects.GetRectangleToRectangle(p1.obj.getBounds(), ball.obj.getBounds()).y + ball.obj.height / 2;
		// console.log(hit.y);
		console.log("hitx 0: " + p1.hitPoint[0].x);
		console.log("hity 0: " + p1.hitPoint[0].y);
		console.log("hitx 1: " + p1.hitPoint[1].x);
		console.log("hity 1: " + p1.hitPoint[1].y);
		// console.log(Phaser.Geom.Intersects.GetRectangleIntersection(ball.getBounds(), p1.getBounds()));

		
		console.log('Collision player1 and ball');
		if (ctBall == -1)
		{
			ctBall = ctBall * -1;
			if (ctUpP1 == 1)
			{
				// TODO: move in y
			}
		}
	}
	else if (Phaser.Geom.Intersects.RectangleToRectangle(p2.obj.getBounds(), ball.obj.getBounds())) {
		// Collision detected player2 and ball
		console.log('Collision player2 and ball');
		if (ctBall == 1)
		{
			ctBall = ctBall * -1;
			if (ctUpP1 == 1)
			{
				// TODO: move in y
			}
		}
	}

	// if sombody put a goal
	if (ball.obj.x > 1300)
	{
		// console.log('Player2 Win this round');
		ctBall = ctBall * -1;
		ball.obj.x = 600;
	}
	else if (ball.obj.x < -100)
	{
		// console.log('Player1 Win this round');
		ctBall = ctBall * -1;
		ball.obj.x = 600;
	}
}
