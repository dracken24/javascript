// 'let' more use than 'var'
// let mor for local and var more for global variable
// switch case work in js
// try and catch work in js

// for
for (let i = 0; i < 5; i++){
	console.log(i);
}

// do while
let it = 0;
do {
	console.log("I like bacon !!!!!");
} while (it++ < 4) {
	console.log("Bacon is life.");
}
console.log("Oh, yea!!!");

//******************************** 	Pop-up windows	 ********************************/

alert("Don't click on that button.");
alert("Really !!?!, what dou you think when i say dont click on that button?");
alert("DON'T F*#@&?! CLICK AGAIN ON THAT F@?*$%& BUTTON!!!!!!!!");

let ret = confirm("Go f*#$ yourselve, did i give up??");

// if (ret == true) { alert("You hit ok"); }
// else if (ret == false) { alert("You hit cancel"); }

ret == true ? alert("You hit ok") : alert("You hit cancel");

//********************************* 	Functions	 ********************************/

let str = prompt("Enter your name.");
PrintThis(str);

// function void
function PrintThis(str) {
	alert("Hi " + str);
	console.log(str, "is just a son of a b#@%?");
}

// return function
function Calcul(num1, num2 = 10) {
	let total = num1 + num2;

	return (total);
}

console.log("Reponse: " + Calcul(24));
console.log("Reponse: " + Calcul(24, 12));

//******************************** 	Use js library	 ********************************/
// Number() == like atoi(), var.toString() == itoa() in c

let age = prompt("What is your age?");
age = Number(age); // ( Number() == (parseInt(age);)), 
alert("Age * 2 = " + (age * 2) + " ans");

//******************************** 	Event functions	 ********************************/

let evFunct = function() {
	console.log("This is like a pointer function");
}

if (confirm("Dou you want use an event function?") == true) {
	evFunct();
}

// auto execute event function
// (function() { console.log("This is like a pointer function") })();

//************************************ 	array	 ************************************/
// like a vector in c++

let tab = ["Banana", "Apple", "Bacon"];
console.log("\nFirst:");
for (let i = 0; i < tab.length; i++) {
	console.log(tab[i][0]); console.log(tab[i]);
}

console.log('\nSecond:');
tab.push("Ananas");
console.log(tab.join("\n"));
