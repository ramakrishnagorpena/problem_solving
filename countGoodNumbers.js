var countGoodNumbers = function (n) {
  const MOD = 1_000_000_007n;
  let result = n % 2 === 0 ? 1n : 5n;
  let x = 20n;

  for (let i = BigInt(Math.floor(n / 2)); i > 0n; i /= 2n) {
    if (i % 2n !== 0n) {
      result = (result * x) % MOD;
    }
    x = (x * x) % MOD;
  }

  return Number(result);
};

console.log(countGoodNumbers(8)); // 160000
