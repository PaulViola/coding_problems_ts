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

export type TwoSumReturn = [number, number] | []

export const twoSum = (nums: number[], target: number): TwoSumReturn => {
    if (nums.length < 2) {
        throw new Error("The input array must have at least two numbers")
    }

    const targetNums = new Map<number, number>()

    for(let i = 0; i < nums.length; i++) {
        const currentNumber = nums[i]

        if((target - currentNumber) === currentNumber) {
            continue;
        }

        if(targetNums.has(currentNumber)) {
            const firstIndex = targetNums.get(currentNumber)
            return [firstIndex , i]
        }

        targetNums.set(target - currentNumber, i)
    }

    return []
}
