let firstPage = document.getElementById("first");
let secondPage = document.getElementById("second");
let firstBtn = document.getElementById("firstchoice");
let secondBtn = document.getElementById("secondchoice");
let thirdBtn = document.getElementById("thirdchoice");
let fourthBtn = document.getElementById("fourthchoice");
let fifthBtn = document.getElementById("fifthchoice");
let submitBtn = document.getElementById("submitBtn");
let text = document.getElementById("text");

submitChoice = () => {
    if(firstBtn.checked){
        text.innerHTML= "You selected 1 out of 5";
    }
    else if(secondBTN)
    firstPage.style.display = "none";
    secondPage.style.display = "block";

}