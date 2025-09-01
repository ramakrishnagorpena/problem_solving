const subSet = function (nums) {
  let ans = [];
  const generateSubset = (index, current) => {
    if (index === nums.length) return ans.push([...current]);

    //Pick Case
    current.push(nums[index]);
    generateSubset(index + 1, current);

    //Not Pick Case
    current.pop();
    generateSubset(index + 1, current);
  };

  generateSubset(0, []);

  return ans;
};


console.log(subSet([1,2,3])); // [ [ 1, 2, 3 ], [ 1, 2 ], [ 1, 3 ], [ 1 ], [ 2, 3 ], [ 2 ], [ 3 ], []]
