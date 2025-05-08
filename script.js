function DisplayNumbers() {
    const input = document.getElementById('numberinput');
   
    const resultDiv = document.getElementById('result');
    const newval = document.getElementById('newval');

    if (isNaN(value) ) {

        resultDiv.textContent = ` Please enter a number between 0 and 999.`;
    if(value > 999 || value < 0)
        resultDiv.textContent = `Invalid input: ${input}. Please enter a number between 0 and 999.`;

    if (!/^\d*$/.test(value)) {
        error.textContent = "Only numbers are allowed!";
    } else {
        resultDiv.textContent = `You entered: ${value}`;
    }
}
}