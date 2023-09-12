const elementsWrapper = document.querySelector("#wrapper");
const elementsColors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
const ELEMENTS = 196;

for (let i = 0; i < ELEMENTS; i++) {
  const element = document.createElement("div");
  element.classList.add("hover-board__item");

  element.addEventListener("mouseover", () => setColor(element));
  element.addEventListener("mouseout", () => removeColor(element));

  elementsWrapper.appendChild(element);
}

function setColor(element) {
  let elementColor = getRandomColor();
  element.style.background = elementColor;
  element.style.boxShadow = `0px 0px 5px ${elementColor}, 0px 0px 10px ${elementColor}`;
}

function removeColor(element) {
  element.style.background = `#373737`;
  element.style.boxShadow = `0px 0px 5px #373737`;
}

function getRandomColor() {
  return elementsColors[Math.floor(Math.random() * elementsColors.length)];
}
