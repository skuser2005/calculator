const buttonsEl = document.querySelectorAll("button");
const inputFieldEl = document.getElementById("result");

buttonsEl.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "C") {
            clearResult();
        } 
        else if (value === "=") {
            calculateResult();
        } 
        else if (value === "⌫") {
            backspace();
        } 
        else {
            appendValue(value);
        }
    });
});

function clearResult() {
    inputFieldEl.value = "";
}

function backspace() {
    inputFieldEl.value = inputFieldEl.value.slice(0, -1);
}

function appendValue(value) {
    if (value === "x") value = "*";
    if (value === "÷") value = "/";

    inputFieldEl.value += value;
}

function calculateResult() {
    try {
        inputFieldEl.value = eval(inputFieldEl.value);
    } catch {
        inputFieldEl.value = "Error";
    }
}
