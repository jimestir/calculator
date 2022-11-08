const operations = {
  addition: (a, b) => a + b,
  division: (a, b) => a / b,
  empowerment: (a, b) => Math.pow(a, b),
  multiplication: (a, b) => a * b,
  reversSign: (a) => a * -1,
  subtraction: (a, b) => a - b,
  percentage: (a, b) => a * (b / 100),
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
    this.operator = null;
  }
  addNumber(number) {
    this.currValue += number;
    this.printDisplay();
  }
  compute() {
    const a = this.prevValue;
    const b = this.currValue;
    switch (operator) {
      case "addition":
        operations.addition(a, b);
      case "division":
        operations.division(a, b);
      case "multiplication":
        operations.multiplication(a, b);
      case "revers-sign":
        operations.reversSign(b);
      case "subtraction":
        operations.subtraction(a, b);
      case "percentage":
        operations.percentage(a, b);
    }
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
  operator(operator) {
    this.operator = operator;
    console.log(operator);
    this.printDisplay();

  }
  printDisplay() {
    this.displayCurrValue.innerHTML = this.currValue;
    this.displayPrevValue.innerHTML = this.prevValue;
    this.operator = null;
  }
}

const calculate = new Calculator(displayPrevValue, displayCurrValue);

const btn = document.querySelector(".calculator__buttons");
const r = /[0-9]/;

btn.addEventListener("click", (e) => {
  const keyword = e.target.value;
  const className = e.target.className;
  if (r.test(keyword)) {
    calculate.addNumber(keyword);
  }
  if (keyword === "C") {
    calculate.erase();
  }
  if (keyword === "AC") {
    calculate.eraseEverything();
  }
  if (className === "operator") {
    calculate.operator(keyword);
  }
  if (keyword === "=") {
  }
});
