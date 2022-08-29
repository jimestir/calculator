const operations = {
  addition: (a, b) => a + b,
  subtraction: (a, b) => a - b,
  division: (a, b) => a / b,
  multiplication: (a, b) => a * b,
  empowerment: (a, b) => Math.pow(a, b),
  reversSign: (a) => a * -1,
};

const number = document.querySelectorAll("number");
const btn = document.querySelector(".calculator__buttons");
const displayValue = document.querySelector(".display-value");
const r = /[0-9]/;

btn.addEventListener("click", (e) => {
  const keyword = e.target.value;
  if (r.test(keyword)) {
    writeToDOM(keyword);
  }
  if (keyword === "C") {
    erase(displayValue);
  }
  if (keyword === "AC") {
    eraseEverything(displayValue);
  }
});

function writeToDOM(content) {
  displayValue.innerHTML += content;
}
function erase(element) {
  element.innerHTML = element.innerHTML.slice(0, -1);
}
function eraseEverything(element) {
  element.innerHTML = "";
}
