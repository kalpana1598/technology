var Nums = [1, 1, 0, 1, 1, 1];
var findMaxConsecuitveOnes = function (nums) {
  var maxCount = 0;
  var count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      currentCount = 0;
    } else {
      currentCount++;
    }
    if (currentCount > largestCount) largestCount = currentCount;
  }

  return maxCount;
};

findMaxConsecuitveOnes(Nums);
