/*
var name = prompt("What is your name?");
console.log("Hello, " + name + "! This is a secret console message. Enjoy being awesome!")

alert("Welcome, " + name + ". This is the best site ever!")
*/

var firstName = prompt("Please enter your first name.");
var lastName = prompt("Please enter your last name.");
alert("Welcome " + firstName + " " + lastName);
var age = prompt("How old are you?");
if (age <18) {
	alert("Sorry, at " + age + " you're too young to vote.");
} else {
	alert("Great, at " + age + " you are old enough to vote!");
}