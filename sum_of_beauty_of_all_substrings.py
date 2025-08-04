def get_min_max_count(char_map):
    values = char_map.values()
    return min(values), max(values)

def beautySum(s):
    ans = 0

    for i in range(len(s)):
        char_map = {}
        for j in range(i, len(s)):
            char = s[j]
            char_map[char] = char_map.get(char, 0) + 1
            min_count, max_count = get_min_max_count(char_map)
            ans += (max_count - min_count)

    return ans

# Example usage
print(beautySum("aabcb"))  # Output: 5
