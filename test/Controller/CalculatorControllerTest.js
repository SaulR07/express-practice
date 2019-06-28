/**
 * Test class for calculator requests
 * @author Saul Reyes Medina <saulreyesm@outlook.com>
 */

// @ts-nocheck
"use strict";

const mocha = require("mocha");
const expect = require("chai").expect;
const fetch = require("node-fetch");
const { URLSearchParams } = require("url"); // equals to const URLSearchParams = require("url").URLSearchParams is for destructuring

/**
 * Test of calculator requests
 * @author Saul Reyes Medina <saulreyesm@outlook.com>
 */
describe("Request of calculator test", () => {
  /**
   * Test for add
   * @author Saul Reyes Medina <saulreyesm@outlook.com>
   */
  describe("POST /add test", () => {
    var params = new URLSearchParams();
    params.append("val1", 1);
    params.append("val2", 2);

    it("Returns status code 200", async () => {
      let request = await fetch("http://localhost:3000/calculator/add", {method: "POST",body: params});
      expect(request.status).to.be.equal(200);
    });

    it("Returns result sum 1 + 2 = 3", async () => {
      let request = await fetch("http://localhost:3000/calculator/add", {method: "POST",body: params});
      let resp = await request.json();
      expect(resp).to.be.equal(3);
    });
  });
});
