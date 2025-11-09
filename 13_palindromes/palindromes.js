const palindromes = function (string) {
  const punctiuations = [" ", ".", ",", ":", ";", "!", "?"];

  const lettersOnly = string
    .split("")
    .filter((char) => !punctiuations.includes(char))
    .join("")
    .toLowerCase();

  const lettersOnlyReversed = lettersOnly
    .slice()
    .split("")
    .reverse()
    .join("")
    .toLowerCase();

  return lettersOnly === lettersOnlyReversed;
};

console.log(palindromes("dinmueter, die fetti, isch so fett!!!!"));

// Do not edit below this line
module.exports = palindromes;
