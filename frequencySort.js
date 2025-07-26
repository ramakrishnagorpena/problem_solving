function frequencySort(s) {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      let value = map.get(s[i]);
      map.set(s[i], value + 1);
    } else {
      map.set(s[i], 1);
    }
  }
  let sortedArray = [...map.entries()].sort((a, b) => b[1] - a[1]);
  return sortedArray.map((el) => el[0].repeat(el[1])).join("");
}

console.log(frequencySort("tree"));
