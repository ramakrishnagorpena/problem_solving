const myAtoi = function (s) {
  let i = 0;
  let n = s.length;
  let sign = 1;
  let result = 0;

  while (i < n && s[i] === " ") {
    i++;
  }

  if (i < n && (s[i] === "+" || s[i] === "-")) {
    if (s[i] === "-") {
      sign = -1;
    }
    i++;
  }

  while (i < n && s[i] >= "0" && s[i] <= "9") {
    result = result * 10 + (s[i].charCodeAt(0) - "0".charCodeAt(0));

    if (sign === 1 && result > 2 ** 31 - 1) {
      return 2 ** 31 - 1;
    }
    if (sign === -1 && result > 2 ** 31) {
      return -(2 ** 31);
    }
    i++;
  }

  return sign * result;
};

console.log(myAtoi(" 42cba33")); // Output: 42