const supertest = require('supertest')
const request = supertest(process.env.api_url);
const expect = require("chai").expect;

describe("TC300:POST users test suite", function () {
  // Username needs to be unique. concat Post and current time to generate a unique username.
  const newDate = 'Post' + new Date().getTime();
  // Valid json input.
  const service = {
    "username": newDate,
    "score": 0
  };

  // Invalid json input.
  const invalidservice = {
    "user": newDate,
    "score": 0
  };

  // Create a user and verify that response returns 201.
  it("TC301:Create new user", async function () {
    const response = await request.post("/user").send(service)
    expect(response.status).to.eql(201);
  });

  // Create same user again and verify response is 400
  it("TC302:Verify adding new user with same json again gives 400", async function () {
    const response = await request.post("/user").send(service)
    expect(response.status).to.eql(400);
  });

  // Create a user with invalid json and verify that response returns 400.
  it("TC303:Create new user with invalid json", async function () {
    const response = await request.post("/user").send(invalidservice)
    expect(response.status).to.eql(400);
  });

});