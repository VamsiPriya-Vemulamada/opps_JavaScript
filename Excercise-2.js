class library{
    constructor(buildingName, numberofBooks){
        this.buildingName =buildingName
        this.numberofBooks = numberofBooks
    }
}
greeting()
{
    console.log("welcome to ${this.bildingName");
}
const riverDaleLibray = new library('yale Library', 1000)
// Instructor

class Instructor {
    #name = {
      first: "",
      last: ""
    };
// age
#subject;
constructor(firstName, lastName, subject) {
      this.#name.first = firstName; // # decelaring a varibale in private 
  this.#name.last = lastName;
  this.#subject = subject;
  }
}


