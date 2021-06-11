const supertest = require('supertest')
const request = supertest('https://supervillain.herokuapp.com/v1')
const expect = require("chai").expect;

describe("GET users call", function () {
    it("returns 200 for all users", async function () {
      const response = await request.get("/user"); 
      expect(response.status).to.eql(200);
    });

    it("returns 404 for invalid call for all users", async function () {
      // invalid url supplied -/users
        const response = await request.get("/users");
        expect(response.status).to.eql(404);
      });
  });