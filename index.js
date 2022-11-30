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
  song: document.getElementById("song-card"),

  submit: document.querySelector("#form"), // getElementById looks for the id that is passed through it, in this case being "btn"
  remove: document.querySelectorAll("#remove"),
  text: document.querySelector("#title"), // album

  artist: document.querySelector("#Artist"), //artist

  imageurl: document.querySelector("#image"),

  // querySelectorAll will access multiple elements with the same class, in this case being "point"
};

DOMSelectors.submit.addEventListener("submit", function (e) {
  e.preventDefault();
  let title = DOMSelectors.text.value;
  let Album = {};
  Album.title = title;

  Album.Artist = DOMSelectors.artist.value;

  Album.image = DOMSelectors.imageurl.value;

  DOMSelectors.text.value = "";
  DOMSelectors.artist.value = "";
  DOMSelectors.imageurl.value = "";

  console.log(Album);
  makeCard(Album);
  deleteCard();
});
document.getElementById("text");

function makeCard(Album) {
  DOMSelectors.submit.insertAdjacentHTML(
    "afterend",
    `<div class="song-card">
      <H2>text ${Album.title}</H2>
    <img class ="image" src=${Album.image} alt="">
    <h3>artist ${Album.Artist}</h3>

<button class="button2">remove</button>
</div>`
  );
}

/* /* let removeButton = document.querySelectorAll(".remove");
removeButton.forEach((button) => {
  button.addEventListener("click", function (event) {
    console.log(event.target.parentElement.remove());
  });
}); */

/* DOMSelectors.button2.addEventListener("click", function (clear) {
  submit.remove();
}); */

function deleteCard() {
  const remove = document.querySelectorAll(".button2");
  remove.forEach((R) => {
    R.addEventListener("click", (e) => {
      e.target.parentElement.remove();
    });
  });
}
