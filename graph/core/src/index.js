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
document.addEventListener('keydown', (event) => {
	MovePlayer(event);
}, false);

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

		// this.tweens.add({
		// 	targets: p1,
		// 	y: 0,
		// 	duration: 2000,
		// 	ease: "",
		// 	yoyo: true,
		// 	loop: 0
		// });
	}
}

const config = {
	type: Phaser.AUTO,
	parent: 'phaser-example',
	width: 1200,
	height: 800,
	scene: MyGame
};

//---------------------------------------------- Execution ----------------------------------------------//

const game = new Phaser.Game(config);

function MovePlayer(event) {
	const keyPressed = event.key;
	console.log("You hit: " + keyPressed);

	// P1 up and down
	if (keyPressed === 'o') {
		p1.y -= 10;
	}
	if (keyPressed === 'l') {
		p1.y += 10;
	}

	// P2 up and down
	if (keyPressed === 'w') {
		p2.y -= 10;
	}
	if (keyPressed === 's') {
		p2.y += 10;
	}
}
