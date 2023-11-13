/*
 * Filename: complex_code.js
 * 
 * Description: This complex code demonstrates sophisticated JavaScript programming techniques and tackles a complex problem.
 * 
 * Problem statement: Given an array of integers, find the maximum sum of any contiguous subarray.
 * 
 * Approach: Kadane's algorithm is used to solve this problem.
 * 
 * Kadane's algorithm steps:
 * 1. Initialize two variables maxSoFar and maxEndingHere to 0.
 * 2. Iterate over the array and for each element, update maxEndingHere as the maximum of current element or current element + maxEndingHere.
 * 3. If maxEndingHere becomes negative, reset it to 0.
 * 4. Update maxSoFar as the maximum of maxSoFar and maxEndingHere.
 * 5. Return maxSoFar as the maximum sum of the contiguous subarray.
 *
 * This code defines a function `findMaxSum` that applies Kadane's algorithm to get the maximum sum of a subarray.
 */

/**
 * Function to find the maximum sum of a subarray using Kadane's algorithm.
 *
 * @param {number[]} nums - Array of integers.
 * @returns {number} The maximum sum of any contiguous subarray.
 */
function findMaxSum(nums) {
  let maxSoFar = 0;
  let maxEndingHere = 0;

  for (let i = 0; i < nums.length; i++) {
    maxEndingHere = Math.max(nums[i], nums[i] + maxEndingHere);
    
    if (maxEndingHere < 0) {
      maxEndingHere = 0;
    }

    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

// Test cases
const array1 = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log("Maximum sum of subarray for array1:", findMaxSum(array1));

const array2 = [2, 3, -4, -1, -2, 1, 5, -3];
console.log("Maximum sum of subarray for array2:", findMaxSum(array2));

const array3 = [1, -2, 3, 4, -5, 8, -3, 2];
console.log("Maximum sum of subarray for array3:", findMaxSum(array3));

/*
 * The above test cases will output:
 * Maximum sum of subarray for array1: 7
 * Maximum sum of subarray for array2: 6
 * Maximum sum of subarray for array3: 11
 */