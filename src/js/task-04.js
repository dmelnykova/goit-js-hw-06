const btnPlus = document.querySelector('button[data-action="increment"]');

const btnMinus = document.querySelector('button[data-action="decrement"]');

const initialValue = document.getElementById("value");

let counterValue = 0;
btnMinus.addEventListener("click", function () {
    counterValue -= 1;
    initialValue.textContent = counterValue;
});

btnPlus.addEventListener("click", function () {
    counterValue += 1;
    initialValue.textContent = counterValue;
});
