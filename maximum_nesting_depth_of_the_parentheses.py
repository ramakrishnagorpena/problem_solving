def maxDepth(self, s: str) -> int:
        count = 0
        maxCount = 0
        for i in range(len(s)):
            if s[i] == "(":
                count += 1
                maxCount = max(maxCount, count)
            elif s[i] == ")":
                count -= 1
        return maxCount

print(maxDepth("(1+(2*3)+((8)/4))+1")) # Output: 3