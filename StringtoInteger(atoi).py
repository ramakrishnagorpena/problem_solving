class Solution:
    def myAtoI(self, s: str):
        i = 0
        n = len(s)
        sign = 1
        result = 0

        while i< n and s[i] == " ":
            i += 1

        if i < n and (s[i] == "+" or s[i] == "-"):
            if s[i] == "-":
                sign = -1
            i += 1
        
        while i<n and s[i].isdigit():
            result = result * 10 + int(s[i])

            if sign == 1 and result > 2**31-1:
                return 2**31-1
            if sign == -1 and result > 2**31:
                return -2**31
            
            i += 1
        
        return sign * result
    
sol = Solution()
print(sol.myAtoI(" -32")) # Output: -32
            