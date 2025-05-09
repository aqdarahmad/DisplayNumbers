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
  const input = document.getElementById("numberInput").value.trim();
  const display = document.getElementById("display");
  const error = document.getElementById("error");
  const result = document.getElementById("result");

  display.innerHTML = '';
  error.textContent = '';
  result.textContent = '';

  if (!/^\d{1,3}$/.test(input)) {
    error.textContent = "⚠️ Only numbers between 0 and 999 are allowed.";
    return;
  }

  const padded = input.padStart(3, '0');
  for (let ch of padded) {
    display.appendChild(createDigit(ch));
  }

  result.textContent = `You entered: ${input}`;
}
