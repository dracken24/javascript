// ************************************ 	Class	 ************************************/

// class object
let wizzard = {
    title: "Sieur",
    nom: "Mordack",
    spells: ["Fire", "Ice", "Blink"],
    weapon: "BoneStaff of wisdom",

    attack: function(title, nom, spell){
        console.log("The great " + title, nom + " attack with " + spell);
    }
}

wizzard.attack(wizzard.title, wizzard.nom, wizzard.spells[1]);

// ********************************* 	Decomposition	 ********************************/

let info = ["Ichigo", '16', "Shinigami"];

// let namee = info[0];
// let age = info[1];
// let func = info[2];

let [namee, age, func] = info;

console.log(namee);
console.log(age);
console.log(func);

