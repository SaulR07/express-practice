/**
 * Class for test methods of calculator service
 * @author Saul Reyes Medina <saulreyesm@outlook.com>
 */

'use strict';

const mocha = require("mocha");
const expect = require("chai").expect;
const calculatorService = require("../../src/service/CalculatorService");

/**
 * Test for calculator
 * @author Saul Reyes Medina <saulreyesm@outlook.com>
 */
describe("Calculator test", () => {
  /**
   * Test for sum
   * @author Saul Reyes Medina <saulreyesm@outlook.com>
   */
  describe("Sum Test", () => {
    it("Sum 3 + 4 = 7", (done) => {
      let val1 = 3;
      let val2 = 4;
      let add = calculatorService.sum(val1, val2);

      expect(add).to.equals(7);
      done();
    });
  });

  /**
   * Test for subtraction
   * @author Saul Reyes Medina <saulreyesm@outlook.com>
   */
  describe("Subtraction test", () => {
    it("Subtraction 5 - 3 = 2", (done) => {
      let val1 = 5;
      let val2 = 3;
      let subtraction = calculatorService.subtraction(val1, val2);

      expect(subtraction).to.eq(2);
      done();
    });
  });
});
