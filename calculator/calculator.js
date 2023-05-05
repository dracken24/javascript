console.log("Welcome to la calculatoration.");

main();

function main() {
	let str = "Choose operation type.\n\n";
	let add = "For adition,                enter  1\n", sub = "For substraction,     enter  2\n";
	let mul = "For multiplication,  enter  3\n", div = "For division,              enter  4\n\n";
	let qit = "For quit,                     enter  0";

	while (true) {
		let ret = Number(prompt(str + add + sub + mul + div + qit, "Enter your choice here."))
		if (ret < 0 || ret > 4){
			alert("Wrong number: " + ret);
			continue;
		}
		else if (ret == 0) { break; } // quit

		ChooseAction(ret);
	}

	alert("Thx for trying la Calculatoration !!!");
}

function ChooseAction(choice) {
	let nbr1 = Number(prompt("Enter first number."));
	let nbr2 = Number(prompt("Enter second number."));

	switch (choice) {
		case 1:
			Addition(nbr1, nbr2); // addition
			break;
		case 2:
			Substraction(nbr1, nbr2); // substraction
			break;
		case 3:
			Multiplication(nbr1, nbr2); // multiplication
			break;
		case 4:
			Division(nbr1, nbr2); // division
			break;
		default:
			break;
	}
}

function Addition(nbr1, nbr2) {
	alert("Calculation : " + nbr1 + " + " + nbr2 + " = " + (nbr1 + nbr2));
}

function Substraction(nbr1, nbr2) {
	alert("Calculation : " + nbr1 + " - " + nbr2 + " = " + (nbr1 - nbr2));
}

function Multiplication(nbr1, nbr2) {
	alert("Calculation : " + nbr1 + " * " + nbr2 + " = " + (nbr1 * nbr2));
}

function Division(nbr1, nbr2) {
	alert("Calculation : " + nbr1 + " / " + nbr2 + " = " + (nbr1 / nbr2));
}
