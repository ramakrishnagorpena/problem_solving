/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const symbols = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    let curNum = symbols[s[i]],
      nextNum = symbols[s[i + 1]];
    if (curNum < nextNum) {
      res += nextNum - curNum;
      i++;
    } else res += curNum;
  }
  return res;
};

console.log(romanToInt("IV")); //Out PUT: 4
