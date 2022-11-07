const DOMSelectors = {
  button: document.getElementById("btn"), // getElementById looks for the id that is passed through it, in this case being "btn"
  text: document.querySelector("#text"), // queryselectors look for elements based on parameters, being '.' or '#'
  box: document.getElementById("big-black-box"),
  points: document.querySelectorAll(".point"), // querySelectorAll will access multiple elements with the same class, in this case being "point"
};

function backgroundAndText(background, text) {
  background.style.backgroundColor = "red";
  text.innerHTML = "This is now a big red box";
  text.style.fontSize = "40px";
}

DOMSelectors.button.addEventListener("click", function () {
  backgroundAndText(DOMSelectors.box, DOMSelectors.text);
});
DOMSelectors.button.addEventListener("click", function () {
  backgroundAndText(DOMSelectors.box, DOMSelectors.text);
});
DOMSelectors.button.addEventListener("click", function () {
  backgroundAndText(DOMSelectors.box, DOMSelectors.text);
});

function changeLi() {
  DOMSelectors.points.forEach((point) => {
    point.addEventListener("click", function () {
      point.textContent;
    });
  });
}
changeLi();
