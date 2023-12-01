const file = Bun.file("input.txt");

const findFirstNumber = (numbers: string): number => {
  for (let i = 0; i < numbers.length; i++) {
    if (Number(numbers[i])) {
      return Number(numbers[i]);
    }
  }
  return 0;
};

const findLastNumber = (numbers: string): number => {
  for (let i = numbers.length - 1; i >= 0; i--) {
    if (Number(numbers[i])) {
      return Number(numbers[i]);
    }
  }
  return 0;
};

async function init() {
  const text = await file.text();
  const total = text.split("\n").reduce((runningTotal, currentLine) => {
    const tensDigit = findFirstNumber(currentLine) * 10;
    const onesDigit = findLastNumber(currentLine);
    const lineNumber = tensDigit + onesDigit;
    return runningTotal + lineNumber;
  }, 0);
  console.log(total);
}

init();
