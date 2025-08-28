def countGoodNumbers(n: int) -> int:
        MOD = 10**9 + 7
        even_count = n // 2
        odd_count = (n + 1) // 2

        return (pow(5, odd_count, MOD) * pow(4, even_count, MOD)) % MOD

print(countGoodNumbers(3)) # 100
print(countGoodNumbers(5)) # 2000