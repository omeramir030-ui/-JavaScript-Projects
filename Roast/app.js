const roasts = [
  "This code has more red flags than a bullfighting convention.",
  "I've seen spaghetti with better structure than this.",
  "Congrats, you reinvented a bug nobody asked for.",
  "This variable name has more personality than your code.",
  "Somewhere, a CS professor just felt a disturbance.",
  "Your code compiles the way my patience does — barely.",
  "This isn't a function, it's a cry for help.",
  "I ran this in my head and my head crashed too.",
  "Bold of you to assume this was going to work.",
  "Even Stack Overflow wouldn't touch this one.",
  "This code doesn't have bugs, it has a whole ecosystem.",
  "I've seen ransomware with cleaner intentions.",
  "This is less 'code' and more 'a series of unfortunate events'.",
  "Ctrl+Z is not a lifestyle, but it should be for this.",
  "Your indentation is giving 'I gave up halfway through'.",
  "This function does one thing: disappoint.",
  "I'd explain what's wrong, but we don't have that kind of time.",
  "This code was clearly summoned, not written.",
  "Somewhere a rubber duck is refusing to help you debug this."
];

let lastIndex = -1;

function getRandomRoast() {
  let index;
  do {
    index = Math.floor(Math.random() * roasts.length);
  } while (index === lastIndex && roasts.length > 1);
  lastIndex = index;
  return roasts[index];
}

const codeInput = document.getElementById('codeInput');
const fileInput = document.getElementById('fileInput');
const roastBtn = document.getElementById('roastBtn');
const output = document.getElementById('output');
const stamp = document.getElementById('stamp');
const caseNum = document.getElementById('caseNum');

caseNum.textContent = String(Math.floor(Math.random() * 9000) + 1000);

fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    codeInput.value = e.target.result;
  };
  reader.readAsText(file);
});

roastBtn.addEventListener('click', () => {
  output.classList.remove('show');
  stamp.classList.remove('show');

  const code = codeInput.value.trim();
  const firstWord = code.split(/\s+/)[0] || "your code";

  setTimeout(() => {
    const roast = getRandomRoast();
    output.textContent = code
      ? `The court reviewed "${firstWord}" and finds: ${roast}`
      : roast;
    output.classList.add('show');

    setTimeout(() => {
      stamp.classList.add('show');
    }, 150);
  }, 400);
});