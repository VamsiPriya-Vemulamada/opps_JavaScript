// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"],

//     }
// adventurer.inventory.forEach(inventory => {console.log(inventory)});

//    // part 1 creating a for loop on inventory
//      const adventurer = {
//         name: "Robin",
//         health: 10,
//         inventory: ["sword", "potion", "artifact"],

//         companion: {
//             name: "Leo",
//             type: "Cat" ,
//             companion: {
//                 name: "frank",
//                 type: "lizard",
//              belongings: ["scarf","map"]
//             }

// },
// roll (mod = 0) {
// const result = Math.floor(Math.random() * 20) + 1 + mod;
// console.log(`${this.name} rolled a ${result}.`)
// }
//     }

// adventurer.roll(3);
// adventurer.roll(4);
// adventurer.roll(10);

// part 2

class character {
  static Max_Health = 100;
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
    this.companion = "";
  }

  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  }
}

class adventurer extends character {
  static ROLES = ["fighter", "healer", "wizard"];
  constructor(name, role) {
    super(name);
    this.role = adventurer.check(role); // writing here because we cannot call the instance variables or objects under static method where as we have to call in constructor
    // Adventurers have specialized roles.
    // this.role = role;
    // Every adventurer starts with a bed and 50 gold coins.
    this.inventory.push("bedroll", "50 gold coins");
  }
  // Adventurers have the ability to scout ahead of them.
  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
  // for checking the roles as we have declare the max_health as static we need to declare the method as static
  //this.role = adventurer.check(role);
  static check(role) {
    if (adventurer.ROLES.includes(role)) {
      // using includes method which gives the value as true if the value is found. using arraymethod as role is an array here
      return role;
    }
    console.log(role);
    //part 6:
  }
    duel(opponent)
    {
      const myRoll = this.roll();
      console.log(myRoll);
      const opponentRoll = opponent.roll();
      if (myRoll > opponentRoll) {
        opponent.health -= 1; // assuming both healths at the start game is 100
        console.log(
         `${opponent.name} is losing points. Their health is now ${opponent.health}.`
        );// using literal rather than string concatination
      } else {
        this.health -= 1;
        console.log(`${this.name} is losing points. Their health is now ${this.health}.`
          
        );
      }
if(this.health>50)
  console.log(`${this.name} is winner`)
else
console.log(`${opponent.name} is winner`)
    }
       
  }

class companion extends character {
  constructor(name, type) {
    super(name);
    this.type = type;
    this.companion.companion = name;
    this.companion.companion.type = type;
  }
}
// Part 3 and Part 4
const robin = new character("Robin");
// property = value
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new character("Leo"); // property of charcter = creating a new object for charcter class and passing the value of leo in it
robin.companion.type = "Cat";
robin.companion.companion = new character("Frank"); // property of charcter = creating a new object for charcter class and passing the value of leo in it
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];
console.log(robin);
robin.roll();

// Part 5:
class AdventurerFactory {
  constructor(role) {
    this.role = role;
    this.adventurers = [];
  }
  generate(name) {
    const newadventurer = new adventurer(name, this.role);
    this.adventurers.push(newadventurer);
  }
  findByIndex(index) {
    return this.adventurers[index];
  }
  findByName(name) {
    return this.adventurers.find((a) => a.name === name);
  }
}

const healers = new AdventurerFactory("Healer");
// const robin = healers.generate("Robin");
const player1 = new adventurer("priya", "fighter");
const player2 = new adventurer("vamsi", "healer");
player1.duel(player2);
