let firstPage = document.getElementById("first");
let secondPage = document.getElementById("second");
let firstBtn = document.getElementById("firstchoice");
let secondBtn = document.getElementById("secondchoice");
let thirdBtn = document.getElementById("thirdchoice");
let fourthBtn = document.getElementById("fourthchoice");
let fifthBtn = document.getElementById("fifthchoice");
let submitBtn = document.getElementById("submitBtn");
let text = document.getElementById("text");
let darkBtn = document.querySelector(".toggle");
let light = document.querySelector(".light");
let dark = document.querySelector(".dark");
checkFirst = () => {
    firstBtn.checked = true;
  }
  checkSecond = () => {
    secondBtn.checked = true;
  }
  checkThird = () => {
    thirdBtn.checked = true;
  }
  checkFourth = () => {
    fourthBtn.checked = true;
  }
  checkFifth = () => {
    fifthBtn.checked = true;
  }
submitChoice = () => {
    if(firstBtn.checked){
        text.innerHTML= "You selected 1 out of 5";
    }
    else if(secondBtn.checked){
        text.innerHTML= "You selected 2 out of 5";
    }
    else if(thirdBtn.checked){
        text.innerHTML= "You selected 3 out of 5";
    }
    else if(fourthBtn.checked){
        text.innerHTML= "You selected 4 out of 5";
    }
    else if(fifthBtn.checked){
        text.innerHTML= "You selected 5 out of 5";
    }
    else {
        text.innerHTML = "Oops, you forgot select any rate";
    }
    firstPage.style.display = "none";
    secondPage.style.display = "block";

}
lightMode = () => {
  if(dark.style.display === "none") {
  light.style.display = "none";
  dark.style.display = "inline-block";
  }
  else {
  dark.style.display = "none";
  light.style.display = "inline-block";
  }
  document.body.classList.toggle("lightmode");
  if(dark.style.display === "inline-block") {
    darkBtn.style.backgroundColor = "rgba(195, 206, 193, 0.693)";
  }
  else {
    darkBtn.style.backgroundColor = "#3d4847";
  }
}
darkBtn.addEventListener("click", lightMode);