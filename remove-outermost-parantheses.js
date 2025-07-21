function removeOuterParantheses(s) {
  let counter = 0;
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") counter++;
    if (counter !== 0) ans += s[i];
    if (s[i] == ")") counter--;
  }
  return ans;
}

console.log(removeOuterParantheses("(((())))()())")); // out put: (((())))()()
