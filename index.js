/* Using JavaScript you will allow users to input information into a form. The
form will then push data from a JavaScript object into the HTML through
DOM manipulation. The project must contain the following
-Create an object called “DOMSelectors” to hold your DOM Selectors
-Create a function that creates an object and calls the following functions
-Create a function that injects the newly created object into the DOM
-Create a function that clears the input fields after injecting the object
-Create a function to remove an object after they have been created */

//get data from the user (get the variable save it to a user console.log it)
//create an object from that
//push that data into the html

const DOMSelectors = {
  submit: document.querySelector("#form"), // getElementById looks for the id that is passed through it, in this case being "btn"
  text: document.querySelector(".text-box"), // queryselectors look for elements based on parameters, being '.' or '#'
  box: document.getElementById("big-black-box"),
  points: document.querySelectorAll(".point"), // querySelectorAll will access multiple elements with the same class, in this case being "point"
};

DOMSelectors.submit.addEventListener("submit", function (e) {
  e.preventDefault();
  let text = DOMSelectors.text.value;
  console.log();
  let.e = {};
});
document.getElementById(`title`);
