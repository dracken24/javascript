// console.log("Test view");

// Add event listener on keydown
document.addEventListener('keydown', (event) => {
	var name = event.key;
	var code = event.code;
	// Alert the key name and key code on keydown
	console.log("You hit: " + name);
	// alert(`Key pressed ${name} \r\n Key code value: ${code}`);
}, false);




class Example extends Phaser.Scene {
	constructor() {
		super();
	}
	
	preload() {

		this.load.image('Player1', 'imgs/bar_red_00.png');
		this.load.image('Player2', 'assets/sprites/phaser3-logo.png');
		
		// this.load.setBaseURL('https://labs.phaser.io');
		
		this.load.image('sky', 'assets/skies/space3.png');
		this.load.image('blue', 'assets/particles/blue.png');
	}
	
	create() {
		this.add.image(400, 400, 'sky');					// place bg image, x, y, name
		
		const particles = this.add.particles(0, 0, 'blue', {	//set particle system
			speed: 100,
			scale: { start: 1, end: 0 },
			blendMode: 'ADD'
		});
		
		// this.add.image(200, 200, 'Player1');
		const logo = this.physics.add.image(400, 100, 'Player1');
		
		logo.setVelocity(100, 200);			// first: Speed in x, speed in y
		logo.setBounce(0.7 , 0.7);			// for rebound multiplier, in x, in y 
		logo.setCollideWorldBounds(true);	// rebound in screen side
		
		particles.startFollow(logo);
	}
}

const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	scene: Example
};

const game = new Phaser.Game(config);
