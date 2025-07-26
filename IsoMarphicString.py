def isIsomorphic(s: str, t: str) -> bool:
    map_S = {}
    map_T = {}
    for i in range(len(s)):
        char_S = s[i]
        char_T = t[i]
        if char_S in map_S:

            if map_S[char_S] != char_T:
                return False

        else: 
            map_S[char_S] = char_T

        if char_T in map_T:

            if map_T[char_T] != char_S:
                return False

        else:
            map_T[char_T] = char_S
                
    return True
        
print(isIsomorphic("egg","add")) #Output = true
