let firstPage = document.getElementById("first");
let secondPage = document.getElementById("second");
let firstBtn = document.getElementById("firstchoice");
let secondBtn = document.getElementById("secondchoice");
let thirdBtn = document.getElementById("thirdchoice");
let fourthBtn = document.getElementById("fourthchoice");
let fifthBtn = document.getElementById("fifthchoice");
let submitBtn = document.getElementById("submitBtn");
let text = document.getElementById("text");
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