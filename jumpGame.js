/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let gas = 0;

    for (let n of nums) {
        if (gas < 0) {
            return false;
        } else if (n > gas) {
            gas = n;
        }

        gas--;
    }

    return true;
};