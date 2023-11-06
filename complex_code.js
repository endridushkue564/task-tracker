/* complex_code.js */

// This code demonstrates a complex algorithm for finding the maximum subarray sum
// Given an array of integers, it calculates the subarray with the maximum sum

function findMaxSubarraySum(arr) {
  // Initialize variables to track the maximum subarray sum
  let maxSum = 0;
  let currentSum = 0;

  // Iterate through each element in the array
  for (let i = 0; i < arr.length; i++) {
    // Add the current element to the running sum
    currentSum += arr[i];

    // If currentSum becomes negative, reset it to zero
    if (currentSum < 0) {
      currentSum = 0;
    }

    // Compare currentSum with maxSum and update maxSum if necessary
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  // Return the maximum subarray sum
  return maxSum;
}

// Test the findMaxSubarraySum function with some sample inputs
const arr1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log("Max subarray sum of arr1:", findMaxSubarraySum(arr1));

const arr2 = [1, 2, 3, 4, -10, 8, 2, -3, 2];
console.log("Max subarray sum of arr2:", findMaxSubarraySum(arr2));

const arr3 = [1, -1, 1, -1, 1, -1, 1, -1];
console.log("Max subarray sum of arr3:", findMaxSubarraySum(arr3));

// Output:
// Max subarray sum of arr1: 6
// Max subarray sum of arr2: 10
// Max subarray sum of arr3: 1

// This algorithm has a time complexity of O(n)