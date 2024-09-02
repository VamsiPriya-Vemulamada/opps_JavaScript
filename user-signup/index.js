class user{
    name = {}
    constructor( firstName, lastName,email, DOB, password, phoneNumber){
       this.name.firstName = firstName;
       this.name.lastName = lastName;
       this.email = email;
       this.DOB = DOB;
       this.password = password;
       this.phoneNumber = this.phoneNumber
    }
}

const User = new user("priya", "vemulamada", "priya@gmail.com","1970-01-01", "password$1" ,"123-456-7890");

// console.log(User);

const form = document.querySelector('form')
console.log(form);



form.addEventListener('submit', function(e){
    e.preventDefault();
const firstName = form['firstName'].value;
const lastName = form['LastName'].value;
const email = form['email'].value;
const DOB = form['DOB'].value;
const password = form['password'].value;
const phoneNumber = form['phoneNumber'].value;
console.log(firstName);
console.log(lastName);
console.log(email);
console.log(DOB);
console.log(phoneNumber);
console.log(password);
});