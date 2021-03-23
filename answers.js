// LeetCode Solutions 

// question 1: two sum
// I know there is a faster way to do this (with hashmaps but i haven't gotten there yet! this is O(n^2) because of the nested loops)
const twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i,j]
            }
        }
    }
};

// -------------------------------------------------
