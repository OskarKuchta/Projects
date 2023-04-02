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
ownerInput.addEventListener("input", () => {
    owner.innerHTML = (ownerInput.value).toUpperCase();
});
cardNumberInput.addEventListener("input", () => {
    let splitNumber = cardNumberInput.value;
    cardNumber.innerHTML = ([...splitNumber].map((d, i) => (i) % 4 == 0 ? ' ' + d : d).join('').trim());
});
expMonthInput.addEventListener("input", () => {
    cardExp.innerHTML = expMonthInput.value + " / " + expYearInput.value;
});
expYearInput.addEventListener("input", () => {
    cardExp.innerHTML = expMonthInput.value + " / " + expYearInput.value;
})
cvcInput.addEventListener("input", () => {
    showCvc.innerHTML = (cvcInput.value);
});
submit.addEventListener("click", (event) => {
    event.preventDefault();
    if (submitCard.classList.contains("dis")) {
        submitCard.classList.remove("dis");
        content.classList.add("dis");
        submit.innerHTML = "Continue";
    }
    else {
        submitCard.classList.add("dis");
        content.classList.remove("dis");
        submit.innerHTML = "Confirm";
    }
});