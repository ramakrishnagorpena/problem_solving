const largestOddNumber = function (num) {
  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] % 2 === 1) return num.slice(0, i + 1);
  }
  return "";
};

console.log(largestOddNumber("42021")); // OutPut: 42021
