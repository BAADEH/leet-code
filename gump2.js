/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let jumps = 0;
  let currentEnd = 0;
  let farthest = 0;
  for (let i = 0; i < nums.length; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (i === currentEnd) {
        jump++;
        currentEnd = farthest;


    }

    
  }
  return jumps
};
