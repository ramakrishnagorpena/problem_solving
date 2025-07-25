class Solution:
    def longestPalindrome(self, s: str) -> str:
        length = len(s)
        max_len = 0
        ans = ""

        if length <= 1:
            return s

        for i in range(length):
            for j in range(i, length):
                left = i
                right = j

                while left < right and s[left] == s[right]:
                    left += 1
                    right -= 1

                if left >= right and (j - i + 1) > max_len:
                    max_len = j - i + 1
                    ans = s[i:j + 1]

        return ans 
    
sol = Solution()
print(sol.longestPalindrome("babad")) # Output = bab
