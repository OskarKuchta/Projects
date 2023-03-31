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


ownerInput.addEventListener("input", () => {
    owner.innerHTML = (ownerInput.value).toUpperCase();
});
cardNumberInput.addEventListener("input", () => {
    let splitNumber = cardNumberInput.value;
    cardNumber.innerHTML = ([...splitNumber].map((d, i) => (i) % 4 == 0 ? ' ' + d : d).join('').trim()).slice(0,19);
});
expMonthInput.addEventListener("input", () => {
    cardExp.innerHTML = expMonthInput.value.slice(0,2) + " / " + expYearInput.value.slice(0,2);
});
expYearInput.addEventListener("input", () => {
    cardExp.innerHTML = expMonthInput.value.slice(0,2) + " / " + expYearInput.value.slice(0,2);
})
cvcInput.addEventListener("input", () => {
    if(cvcInput.length < 4){
        cvcInput.value = showCvc.innerHTML;
    }
    else {
        showCvc.innerHTML = (cvcInput.value).slice(0,3);
    }
});
console.log(cardNumber.innerHTML);