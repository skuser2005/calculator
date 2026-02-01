const buttonsEl = document.querySelectorAll("button");
const inputFieldEl = document.getElementById("result");

/* ======================
   BUTTON CLICK SUPPORT
   ====================== */
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

/* ======================
   KEYBOARD SUPPORT
   ====================== */
document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (!isNaN(key)) {
        appendValue(key);
    }
    else if (key === "+" || key === "-" || key === "*" || key === "/") {
        appendValue(key);
    }
    else if (key === ".") {
        appendValue(".");
    }
    else if (key === "Enter" || key === "=") {
        event.preventDefault();
        calculateResult();
    }
    else if (key === "Backspace") {
        backspace();
    }
    else if (key === "Escape" || key === "Delete") {
        clearResult();
    }
});

/* ======================
   FUNCTIONS
   ====================== */
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
