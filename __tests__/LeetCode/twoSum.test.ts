// https://leetcode.com/problems/two-sum/
// Given an array of integers, return indices of the two numbers
// such that they add up to a specific target.

// You may assume that each input would have exactly one solution, 
// and you may not use the same element twice.

// Constraints
// 2 <= nums.length <= 10^4
// -10^9 <= nums[i] <= 10^9
// -10^9 <= target <= 10^9
// Only one valid answer exists.

import { twoSum, TwoSumReturn } from '../../LeetCode/twoSum'

describe("Two sums", () => {
    it("Should correctly identify the indexes that add to target", () => {
        // Arrange
        const inputArr = [2, 7, 11, 15]
        const targetNum = 9

        // Act
        const output: TwoSumReturn = twoSum(inputArr, targetNum)
        const firstIndex = output[0] !== undefined ? output[0] : 0;
        const secondIndex = output[1] !== undefined ? output[1] : 0;
        
        // inputArr[firstIndex] + inputArr[secondIndex] = 9
        const sum = inputArr[firstIndex] + inputArr[secondIndex] 

        // Assert
        expect(sum).toEqual(targetNum);
    });

    // eslint-disable-next-line max-len
    it("Should correctly return an empty array if the target value cannot be made with given array", () => {
        // Arrange
        const inputArr = [2, 7, 11, 12]
        const targetNum = 15

        // Act
        const output: TwoSumReturn = twoSum(inputArr, targetNum)

        // Assert
        expect(output).toEqual([]);
    });
});