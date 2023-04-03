const showCvc = document.querySelector("#show-cvc");
const cardNumber = document.querySelector("#numbers-top");
const owner = document.querySelector("#owner");
const cardExp = document.querySelector("#card-expires");
const ownerInput = document.querySelector("#firstlastName");
const cardNumberInput = document.querySelector("#cardNumber");
const expMonthInput = document.querySelector("#exp-month");
const expYearInput = document.querySelector("#exp-year");
const cvcInput = document.querySelector("#cvc-num");
const submit = document.querySelector(".submit-btn");
const content = document.querySelector("#content");
const submitCard = document.querySelector(".submitted");
const errFirst = document.querySelector(".errOne");
const errSecond = document.querySelector(".errTwo");
const errValue = document.querySelector(".errValue");
const errThird = document.querySelector(".errThree");
const errFourth = document.querySelector(".errFour");


ownerInput.addEventListener("input", () => {
    if (ownerInput.value == "") {
        errFirst.style.display = "block";
    }
    else {
    owner.innerHTML = (ownerInput.value).toUpperCase();
    errFirst.style.display = "none";
    }
});
cardNumberInput.addEventListener("input", () => {
    let regex = /[a-zA-z]/g;
    if (cardNumberInput.value == "") {
        errSecond.style.display = "block";
        errValue.style.display = "none";
    }
    else if(cardNumberInput.value.match(/[a-zA-z]/g)){
        errValue.style.display = "block";
    }
    else {
    let splitNumber = cardNumberInput.value;
    cardNumber.innerHTML = ([...splitNumber].map((d, i) => (i) % 4 == 0 ? ' ' + d : d).join('').trim());
    errValue.style.display = "none";
    errSecond.style.display = "none";
    }
});
expMonthInput.addEventListener("input", () => {
    if (expYearInput.value == "" || expMonthInput.value == "") {
        errThird.style.display = "inline-block";
    }
    else {
    cardExp.innerHTML = expMonthInput.value + " / " + expYearInput.value;
    errThird.style.display = "none";
    }
});
expYearInput.addEventListener("input", () => {
    if (expYearInput.value == "" || expMonthInput.value == "") {
        errThird.style.display = "inline-block";
    }
    else {
    cardExp.innerHTML = expMonthInput.value + " / " + expYearInput.value;
    errThird.style.display = "none";
    }
})
cvcInput.addEventListener("input", () => {
    if (cvcInput.value == "") {
        errFourth.style.display = "inline-block";
    }
    else {
    showCvc.innerHTML = cvcInput.value;
    errFourth.style.display = "none";
    }
});
submit.addEventListener("click", (event) => {
    event.preventDefault();
    switchState();
});
function switchState() {
    if (submitCard.classList.contains("dis")) {
        submitCard.classList.remove("dis");
        content.classList.add("dis");
        submit.innerHTML = "Continue";
        cvcInput.value = "";
        ownerInput.value = "";
        cardNumberInput.value = "";
        expMonthInput.value = "";
        expYearInput.value = "";
    }
    else {
        submitCard.classList.add("dis");
        content.classList.remove("dis");
        submit.innerHTML = "Confirm";
        showCvc.innerHTML = "000";
        cardNumber.innerHTML = "0000 0000 0000 0000";
        owner.innerHTML = "OSKAR KUCHTA";
    }
}