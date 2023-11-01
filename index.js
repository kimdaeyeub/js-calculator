// 숫자 버튼
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const dot = document.querySelector(".dot");
// 연산 버튼
const reset = document.querySelector(".reset");
const percentage = document.querySelector(".percentage");
const divide = document.querySelector(".divide");
const multi = document.querySelector(".multi");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const equal = document.querySelector(".equal");
const number = document.querySelector(".number");

let num = 0;
let operator;
let formula = 0;
let result = 0;
let endFormula = false;

const numberControl = () => {
  number.classList.remove("hidden");
};

//변수를 재사용하기 위해서 초기화 시켜준다.
const resetNum = () => {
  num = 0;
};

//숫자를 눌렀을때 해야할 일
// 임의의 변수에 숫자를 저장해준다.
const onClickNum = (value) => {
  if (num === 0) {
    num = value;
  } else {
    num += value;
  }
  numberControl();
  number.innerText = `${num}`;
};

//식에 숫자를 추가해준다
const addNumInFormula = () => {
  num = Number(num);
  if (formula === 0) {
    formula = num;
  } else {
    formula += num;
  }
  num = 0;
};

//식에 연산자를 추가해준다.
const onClickOperator = (value) => {
  addNumInFormula();
  operator = value;
  if (endFormula) {
    formula = result + operator;
  } else {
    formula += operator;
  }
};

//결과값 출력
const onClickResult = () => {
  //마지막 숫자뒤에는 연산 버튼이 클릭되지 않기때문에 여기서 마지막 숫자를 추가해준다.
  addNumInFormula();
  result = eval(formula);
  if (!Number.isInteger(result)) {
    result = result.toFixed(2);
  }
  number.innerText = `${result}`;
  endFormula = true;
};

const onClickResetBtn = () => {
  num = 0;
  formula = 0;
  operator = 0;
  result = 0;
  endFormula = false;
  number.classList.add("hidden");
};

const onClickPercentage = () => {
  num = eval(num / 100);
  number.innerText = `${num}`;
};

//숫자버튼 이벤트
one.addEventListener("click", () => onClickNum("1"));
two.addEventListener("click", () => onClickNum("2"));
three.addEventListener("click", () => onClickNum("3"));
four.addEventListener("click", () => onClickNum("4"));
five.addEventListener("click", () => onClickNum("5"));
six.addEventListener("click", () => onClickNum("6"));
seven.addEventListener("click", () => onClickNum("7"));
eight.addEventListener("click", () => onClickNum("8"));
nine.addEventListener("click", () => onClickNum("9"));
zero.addEventListener("click", () => onClickNum("0"));
dot.addEventListener("click", () => onClickNum("."));
// 연산버튼 이벤트
minus.addEventListener("click", () => onClickOperator("-"));
divide.addEventListener("click", () => onClickOperator("/"));
multi.addEventListener("click", () => onClickOperator("*"));
plus.addEventListener("click", () => onClickOperator("+"));
equal.addEventListener("click", onClickResult);

//reset Everything
reset.addEventListener("click", onClickResetBtn);

//percentage
percentage.addEventListener("click", onClickPercentage);
