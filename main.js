var startBtn = document.querySelector("#start");
var container = document.querySelector(".container");
var selectColors = document.querySelector("#quizColor");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");
const rgbaCode = document.querySelector("#colorRGB");
let modalWindow = document.querySelector("#modalWindow");
let result = document.querySelector("#result");
var timeovermodal = document.querySelector(".timeOverModal");
var startAgainBtn = document.querySelector("#startAgain");
var finalResult = document.querySelector("#finalResult");
var select = document.querySelector("#select");
function startGame() {
  container.style.display = "none";
  selectColors.style.display = "flex";
  let a = setTimeout(()=>{
  selectColors.style.display = "none";
  timeovermodal.style.display = "flex";
  document.querySelector("#finalResult").innerHTML = `Result: ${count}`;
},select.selectedOptions[0].value);
console.log(select.selectedOptions[0].value)
}
var count = 0;
startAgainBtn.addEventListener("click",()=>{
  timeovermodal.style.display = "none";
  container.style.display = "flex";
  result.innerHTML = `Result: 0`; 
})
function againStart(){
    container.style.display = "flex";
    selectColors.style.display = "none";
}
function renderData() {
  btn1.style.background = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(
    Math.random() * 255
  )},${Math.round(Math.random() * 255)})`;
  btn2.style.background = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(
    Math.random() * 255
  )},${Math.round(Math.random() * 255)})`;
  btn3.style.background = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(
    Math.random() * 255
  )},${Math.round(Math.random() * 255)})`;
  btn4.style.background = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(
    Math.random() * 255
  )},${Math.round(Math.random() * 255)})`;
  btn5.style.background = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(
    Math.random() * 255
  )},${Math.round(Math.random() * 255)})`;
  btn6.style.background = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(
    Math.random() * 255
  )},${Math.round(Math.random() * 255)})`;
  var colors = document.querySelector("#colors");
  var randomColor = Math.round(Math.random() * 6);
  var colorschild = colors.children[randomColor];
  rgbaCode.innerHTML = colorschild.style.background.toUpperCase();
}
renderData();
for (let i = 0; i < colors.children.length; i++) {
  colors.children[i].addEventListener("click", function (e) {
    if (rgbaCode.innerHTML === e.target.style.background.toUpperCase()) {
      modalWindow.style.display = "flex";
      modalWindow.innerHTML = "Right";
      setTimeout(() => {
        modalWindow.style.display = "none";
        renderData();
      }, 500);
      count++;
      result.innerHTML = `Result: ${count}`;
    } else {
      modalWindow.style.display = "flex";
      modalWindow.innerHTML = "Wrong";
      setTimeout(() => {
        modalWindow.style.display = "none";
      }, 500);
      count--;
      if (count < 0) {
        count = 0;
      }
      result.innerHTML = `Result: ${count}`;
    }
  });
}

