const showCvc = document.querySelector("#show-cvc");
const cardNumber = document.querySelector("#numbers-top");
const owner = document.querySelector("#owner");
const cardExp = document.querySelector("#card-expires");
const ownerInput = document.querySelector("#firstlastName");
const cardNumberInput = document.querySelector("#cardNumber");
const expDateInput = document.querySelector("#exp-month");
const expYearInput = document.querySelector("#exp-year");
const cvcInput = document.querySelector("#cvc-num");
const submit = document.querySelector(".submit-btn");


ownerInput.addEventListener("input", () => {
    owner.innerHTML = (ownerInput.value).toUpperCase();
});

cvcInput.addEventListener("input", () => {
    if(cvcInput.length < 4){
        cvcInput.value = showCvc.innerHTML;
    }
    else {
        showCvc.innerHTML = (cvcInput.value).slice(0,3);
    }
});