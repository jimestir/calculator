const operations = {
  addition: (a, b) => a + b,
  subtraction: (a, b) => a - b,
  division: (a, b) => a / b,
  multiplication: (a, b) => a * b,
  empowerment: (a, b) => Math.pow(a, b),
  reversSign: (a) => a * -1,
};

const displayPrevValue = document.querySelector(
  ".calculator___display--preValue"
);
const displayCurrValue = document.querySelector(
  ".calculator___display--currValue"
);

class Calculator {
  constructor(displayPrevValue, displayCurrValue) {
    this.displayPrevValue = displayPrevValue;
    this.displayCurrValue = displayCurrValue;
    this.prevValue = "";
    this.currValue = "";
  }
  addNumber(number) {
    this.currValue += number;
    this.printDisplay();
  }
  erase() {
    this.currValue = this.currValue.toString().slice(0, -1);
    this.printDisplay();
  }
  eraseEverything() {
    this.currValue = "";
    this.prevValue = "";
    this.printDisplay();
  }
  printDisplay() {
    this.displayCurrValue.innerHTML = this.currValue;
    this.displayPrevValue.innerHTML = this.prevValue;
  }
}

const calculate = new Calculator(displayPrevValue, displayCurrValue);

const btn = document.querySelector(".calculator__buttons");
const r = /[0-9]/;

btn.addEventListener("click", (e) => {
  const keyword = e.target.value;
  if (r.test(keyword)) {
    calculate.addNumber(keyword);
  }
  if (keyword === "C") {
    calculate.erase();
  }
  if (keyword === "AC") {
    calculate.eraseEverything();
  }
});
