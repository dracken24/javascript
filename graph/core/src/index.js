import Phaser from 'phaser';
import player1 from './assets/bar_red_00.png';
import player2 from './assets/bar_red_00.png';
import bl from './assets/ball_red_00.png';
import background from './assets/terrain_pong_01.png';

let p1;
let p2;
let ball;

//----------------------------------------- catch key events ------------------------------------------//
// Add event listener on keydown

let ctUpP1 = 0;
let ctDownP1 = 0;
let ctUpP2 = 0;
let ctDownP2 = 0;

let ctBall = -1;

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
		this.load.image('p1', player1);
		this.load.image('p2', player2);
		this.load.image('ball', bl);
		this.load.image('background', background);
	}

	create ()
	{
		const bg = this.add.image(600, 400, 'background');

		p1 = this.add.image(1170, 400, 'p1');

		p2 = this.add.image(30, 400, 'p2');

		ball = this.add.image(600, 400, 'ball');
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

//---------------------------------------------- Execution ----------------------------------------------//

const game = new Phaser.Game(config);

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
		ball.x -= 2;
	}
	else if (ctBall == -1) {
		ball.x += 2;
	}
}

function ControlP1() {
	// p1 up down
	if (ctUpP1 == 1 && p1.y > 84) {
		p1.y -= 2;
	}
	if (ctDownP1 == 1 && p1.y < 717) {
		p1.y += 2;
	}
}

function ControlP2() {
	// p2 up down
	if (ctUpP2 == 1 && p2.y > 84) {
		p2.y -= 2;
	}
	if (ctDownP2 == 1 && p2.y < 717) {
		p2.y += 2;
	}
}

function CheckCollision() {
	if (Phaser.Geom.Intersects.RectangleToRectangle(p1.getBounds(), ball.getBounds())) {
		// Collision detected player1 and ball
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
	else if (Phaser.Geom.Intersects.RectangleToRectangle(p2.getBounds(), ball.getBounds())) {
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
	if (ball.x > 1300)
	{
		console.log('Player2 Win this round');
		ctBall = ctBall * -1;
		ball.x = 600;
	}
	else if (ball.x < -100)
	{
		console.log('Player1 Win this round');
		ctBall = ctBall * -1;
		ball.x = 600;
	}
}
