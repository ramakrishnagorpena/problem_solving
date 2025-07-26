/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let mapS = {},
    mapT = {};
  for (let i = 0; i < s.length; i++) {
    if (mapS[s[i]]) {
      if (mapS[s[i]] !== t[i]) return false;
    } else {
      mapS[s[i]] = t[i];
    }
    if (mapT[t[i]]) {
      if (mapT[t[i]] !== s[i]) return false;
    } else {
      mapT[t[i]] = s[i];
    }
  }
  return true;
};

console.log(isIsomorphic("egg", "add")); // Output: true
