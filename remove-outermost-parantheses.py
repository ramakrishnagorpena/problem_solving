class solution: 
    def removeOuterParantheses(self, s: str) -> str:
        counter = 0
        ans = ""

        for char in s:
            if char == ")":
                counter -= 1
            if counter != 0:
                ans += char
            if char == "(":
                counter += 1
        return ans

sol = solution()
print(sol.removeOuterParantheses("()((()()()((()))"))