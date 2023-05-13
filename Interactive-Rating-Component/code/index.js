let firstPage = document.getElementById("first");
let secondPage = document.getElementById("second");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let submitBtn = document.getElementById("submitBtn");
let text = document.getElementById("text");
let darkBtn = document.querySelector(".toggle");
let light = document.querySelector(".light");
let dark = document.querySelector(".dark");
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

lightMode = () => {
  if (dark.style.display === "none") {
    light.style.display = "none";
    dark.style.display = "inline-block";
  }
  else {
    dark.style.display = "none";
    light.style.display = "inline-block";
  }
  document.body.classList.toggle("lightmode");
  if (dark.style.display === "inline-block") {
    darkBtn.style.backgroundColor = "rgba(195, 206, 193, 0.693)";
  }
  else {
    darkBtn.style.backgroundColor = "#3d4847";
  }
}
darkBtn.addEventListener("click", lightMode);