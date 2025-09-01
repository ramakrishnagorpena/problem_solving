def subSet(nums):
    ans = []

    def generateSubset(index, current):
        if index == len(nums):
            ans.append(current[:])  # make a copy
            return

        # Pick Case
        current.append(nums[index])
        generateSubset(index + 1, current)

        # Not Pick Case
        current.pop()
        generateSubset(index + 1, current)

    generateSubset(0, [])
    return ans


print(subSet([1, 2, 3]))
