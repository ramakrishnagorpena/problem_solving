class Solution:
    def frequencySort(self, s: str) -> str:
        freq_map = {}
        for char in s:
            freq_map[char] = freq_map.get(char,0)+1
        
        sorted_chars = sorted(freq_map.items(), key=lambda x: -x[1])
        return ''.join(char * count for char, count in sorted_chars)
    
sort = Solution()
print(sort.frequencySort("tree")) # eetr