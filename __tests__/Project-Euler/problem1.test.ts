// https://projecteuler.net/problem=1
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23.

import { sumMultiples } from '../../Project-Euler/problem1'

describe("Project Euler: Problem 1", () => {
    it("Should correctly calculate the sum of all multiples below 9", () => {
        //Arrange
        const expectedSum = 3 + 5 + 6

        //Act and Assert
        expect(sumMultiples(9)).toEqual(expectedSum);
    });
    it("Should correctly calculate the sum of all multiples below 10", () => {
        //Arrange
        const expectedSum = 3 + 5 + 6 + 9

        //Act and Assert
        expect(sumMultiples(10)).toEqual(expectedSum); 
    });
    it("Should correctly calculate the sum of all multiples below 16", () => {
        //Arrange
        const expectedSum = 3 + 5 + 6 + 9 + 10 + 12 + 15

        //Act and Assert
        expect(sumMultiples(16)).toEqual(expectedSum);
    });
});