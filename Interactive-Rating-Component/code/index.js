let firstPage = document.getElementById("first");
let secondPage = document.getElementById("second");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let submitBtn = document.getElementById("submitBtn");
let text = document.getElementById("text");
let toogleBtn = document.querySelector(".toggle");
let body = document.querySelector("#body");
let lightIcon = document.querySelector(".light");
let darkIcon = document.querySelector(".dark");
let btnValue;
let backBtn = document.querySelector("#back-button");
const checkBtn = (btn) => {
  btn.checked = true;
}

for (let i = 1; i <= 5; i++) {
  const btn = document.getElementById(`btn${i}`);
  btn.addEventListener("click", () => {
    checkBtn(btn);
    btnValue = btn.value;
  })
}

submitBtn.addEventListener("click", () => {
  btnValue != undefined ?
    text.innerHTML = `You gave ${btnValue == 1 ? btnValue + " star" : btnValue + " stars"}, thank for rate!`
    : text.innerHTML = "You forgot to leave a rate!";
  firstPage.style.display = "none";
  secondPage.style.display = "block";
})

backBtn.addEventListener("click", () => {
  location.reload();
})
const toogleTheme = () => {
  lightIcon.style.display = lightIcon.style.display === 'block' ? 'none' : 'block';
  darkIcon.style.display = darkIcon.style.display === 'none' ? 'block' : 'none';
  if (lightIcon.style.display == "block") {
    body.style.backgroundColor = "hsl(216, 12%, 8%)";
    toogleBtn.style.backgroundColor = "aliceblue";
    lightIcon.style.display = "block";
    darkIcon.style.display = "none";
  }
  if (darkIcon.style.display == "block") {
    body.style.backgroundColor = "aliceblue";
    toogleBtn.style.backgroundColor = "hsl(216, 12%, 8%)";
    lightIcon.style.display = "none";
    darkIcon.style.display = "block";
  }
}

toogleBtn.addEventListener('click', toogleTheme);