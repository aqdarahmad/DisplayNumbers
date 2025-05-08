// function DisplayNumbers() {
//     const input = document.getElementById('numberinput');
   
//     const resultDiv = document.getElementById('result');
//     const newval = document.getElementById('newval');

//     if (isNaN(value) ) {

//         resultDiv.textContent = ` Please enter a number between 0 and 999.`;
//     if(value > 999 || value < 0)
//         resultDiv.textContent = `Invalid input: ${input}. Please enter a number between 0 and 999.`;

//     if (!/^\d*$/.test(value)) {
//         error.textContent = "Only numbers are allowed!";
//     } else {
//         resultDiv.textContent = `You entered: ${value}`;
//     }
// }
// }
 const segmentMap = {
  "0": ["a", "b", "c", "d", "e", "f"],
  "1": ["b", "c"],
  "2": ["a", "b", "g", "e", "d"],
  "3": ["a", "b", "c", "d", "g"],
  "4": ["f", "g", "b", "c"],
  "5": ["a", "f", "g", "c", "d"],
  "6": ["a", "f", "g", "c", "d", "e"],
  "7": ["a", "b", "c"],
  "8": ["a", "b", "c", "d", "e", "f", "g"],
  "9": ["a", "b", "c", "d", "f", "g"]
};

function createDigit(digit) {
  const digitEl = document.createElement('div');
  digitEl.className = 'digit';
  ['a', 'b', 'c', 'd', 'e', 'f', 'g'].forEach(seg => {
    const segEl = document.createElement('div');
    segEl.className = `segment ${seg}`;
    if (segmentMap[digit].includes(seg)) {
      segEl.classList.add('on');
    }
    digitEl.appendChild(segEl);
  });
  return digitEl;
}

function showNumber() {
  const input = document.getElementById("numberInput").value;
  const display = document.getElementById("display");
  display.innerHTML = '';

  if (input >= 0 && input <= 999) {
    const padded = input.toString().padStart(3, '0');
    for (let ch of padded) {
      display.appendChild(createDigit(ch));
    }
  }
}
