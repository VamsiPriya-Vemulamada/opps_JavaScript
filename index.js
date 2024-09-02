const person = {
    name: {
      first: 'Elyan',
      last: 'Kemble',
    },
    age: 32,
    location: {
      city: 'Garland',
      state: 'Texas',
      zip: 75040
    },
    occupation: 'Front-End Developer'
  }
  
  function introduce() {
    console.log(`Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`);
  }

//   introduce(); // this gives the  output as `Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`);

  console.log(this); // this key word gives the window object in the browser

person.sayhello =introduce; // here even sayhello is not there it is gonna create a sayhello function or the property of the given oject(here person) remember to compare with the new key word in java


// Instantiating a Class
// Here's a bit more OOP vocabulary for you:

// instance: An object created by a class.
// instantiate: We instantiate a class to create an object.
// instantiation: The process of creating an object.

 // we donot create any objects for methods or funnctions rather we create an object for a class which contains methods, and the variables

 class Animal {
	constructor(eyes, legs, isAwake, isMoving) // constructor is created by deafult by the class
     {
		this.eyes = eyes;
    this.legs = legs;
    this.isAwake = isAwake;
    this.isMoving = isMoving;
	  // return is not needed because the new object is returned by default
	}
  sleep() {
    this.isAwake = false;
  }
  wake() {
    this.isAwake = true;
  }
  sit() {
    this.isMoving = false;
  }
  walk() {
    this.isMoving = true;
  }
  speak(sound) {
    console.log(sound);
  }
  toString(animal = 'Animal') {
    return `This ${animal} has ${this.eyes} eyes and ${this.legs} legs. It ${this.isAwake ? 'is' : 'is not'} awake, and ${this.isMoving ? 'is' : 'is not'} moving.`;
  }
}



class cat extends Animal{

    constructor( fur, isAwake, isMoving)
    {
    super(2,3,1);
    this.fur = fur;
    }

speak() 
{
    super.speak("Meow...");
  }
  toString() 
  {
    return super.toString("Cat");
  }
}

const cat1 = new Animal(2, 4, true, false);
const cat2 = new Animal(2, 4, false, false);
const dog1 = new Animal(2, 4, true, true);
const cow1 = new Animal(2, 4, true, false);

console.log(cat2)

class Human extends Animal {

age = age

}

// encapsulation

class Learner {
  #grades = []; // # decelaring a varibale in private 
  #name = {
    first: '',
    last: '',
  }
  #age;
  constructor(firstName, lastName, age) {
		this.#name.first = firstName; // # decelaring a varibale in private 
    this.#name.last = lastName;
    this.#age = age;
	}
  // when the variable is public, we can use any method to it but if the variable is private we have give the value only give the value manually but rather for the dynamic way of programming if we want initalize the variable we use the getter method and to declare the value setters are used. 
 get name() {
    return this.#name.first + ' ' + this.#name.last; 
  }
  get age() {
    return this.#age;
  }
  set grades(grade) {
    // change the grade to a Number, in case it was provided as a String
    grade = Number(grade);
    // Only accept values between 0 and 100
    if (grade >= 0 && grade <= 100) {
      this.#grades.push(grade);
    }
  }
}

addGrades(...grades) {
  grades = grades.flat();// flat is used for nested arrays
  // looping the grades  
  grades.forEach((grade) => {
    grade = Number(grade); // converting the grades to Number 

    if (grade >= 0 && grade <= 100) {
      this.#grades.push(grade);// pushing the number from back end
    }
  });
}

get average() {
  const arr = [...this.#grades];
  arr.sort((a, b) => a - b).shift();

  return arr.reduce((a, b) => a + b) / arr.length;
}

