def rotateString(s:str, goal:str)->bool:
    return len(s) == len(goal) and goal in (s + s)

print(rotateString("abcd", "dabc")) # true