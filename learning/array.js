// ************************************ 	array	 ************************************/
// like a vector in c++

let evFunct = (str) => console.log(str);

let tab = ["Banana", "Apple", "Bacon"];
console.log("\nFirst:");
for (let i = 0; i < tab.length; i++) {
	console.log(tab[i][0]); console.log(tab[i]);
}

// push_back() a new element in the array
console.log('\nSecond:');
tab.push("Ananas");
console.log(tab.join(", "));

// erase and add in one opperation, ... for va_args
console.log('\nThird:');
tab.splice(0, 1, "Steak", "Potato");
console.log(tab.join(", "));

let sac = tab;

// forin loop, like const auto in c++, iterator
console.log('\nForin test:');
for (const bonbon in sac) {
	console.log(sac[bonbon]);
}

// forof loop, element
console.log('\nForof test:');
for (const bonbon of sac) {
	console.log(bonbon);
	console.log(sac.indexOf(bonbon));
}

// work with a pointer function on each array member
console.log('\nForEach test:');
sac.forEach(element => { evFunct(element); });
// or
// sac.forEach(element => evFunct(element));

// tableau associatif
let names = {
	"First name" : "Chuck",
	"Last name" : "Noris",
	"Job" : "God"
};

let names2 = {
	"First name": "Baby",
	"Last name": "Shark",
	"Job": "??!?"
};

PrintTab(names);
console.log('\n');
PrintTab(names2);
console.log('\n');
PrintTab(sac);

function PrintTab(tab) {
	let result = "";

	for (const value in tab) {
		result += (value + " :: " + tab[value] + '\n');
	}
	console.log(result);
}

//************************************ 	Closure	 ************************************/

function testClosure(name) {
	let result = name + " Quit the chatroom.";
	let myClosure = () => console.log(result);

	return myClosure;
}

let ClosingFunction = testClosure("Boby");
ClosingFunction();

//************************************* 	Set	 ************************************/

// delete doublons
let nbrs = [10, 24, "Banana", 434, 54, 10, "Banana", 434, 534, "Bacon"];
let mySet = new Set(nbrs);

console.log(mySet);

//************************************* 	Map	 ************************************/

let myMap = new Map([
	[25, "bonbon"],
	[64, "Avocat"],
	[69, "Bacon"]
])

console.log(myMap);

// add
myMap.set("Number", "Licorne");
console.log(myMap);

//************************************* 	WeakSet	 ************************************/


let moto1 = {
	constructor: "Suzuki",
	model: "DRX-400"
}

let moto2 = {
	constructor: "Kawasaki",
	model: "KLR-650"
}

let myMotos = new WeakSet([moto1, moto2]);

// myMotos.add(moto1);
// console.log(myMotos);

// myMotos.add(moto2);
console.log(myMotos);
