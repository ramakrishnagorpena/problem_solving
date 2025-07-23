function rotateString(s, goal) {
  if (s === goal) return true;

  let len = s.length - 1;
  while (len >= 0) {
    s = s.slice(1) + s[0];
    if (s === goal) return true;
    len--;
  }
  return false;
}

console.log(rotateString("abc", "abc")); //true

function rotateStr(str, gol) {
  return str.length === gol.length && (str + str).includes(gol);
}

console.log(rotateStr("asab", "saa")); //false
