function calculateFactorial() {
    const number = document.getElementById("numberInput").value;
    let result = 1;

    if (number < 0) {
        result = "Factorial is not defined for negative numbers.";
    } else if (number === "0") {
        result = 1;
    } else {
        for (let i = 1; i <= number; i++) {
            result *= i;
        }
    }

    document.getElementById("result").innerText = `Factorial: ${result}`;
}
