/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length;
  let leftProduct = 1;
  const result = new Array(n).fill(1);
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    result[index] = leftProduct;
    leftProduct *= nums[index];
  }
  let rightProduct = 1;
  for (let index = nums.length - 1; index >= 0; index--) {
    result[index] = result[index] * rightProduct;
    rightProduct = rightProduct * nums[index];
  }
  return result;
};
