var maxDepth = function (s) {
  let count = 0,
    maxCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") count++;
    if (s[i] === ")") count--;
    maxCount = Math.max(maxCount, count);
  }
  return maxCount;
};

console.log(maxDepth("(1+(2*3)+((8)/4))+1")); //Output: 3
