const supertest = require('supertest')
const request = supertest('https://supervillain.herokuapp.com/v1')
const expect = require("chai").expect;

describe("POST users call", function () {
  // Username needs to be unique. concat Post and current time to generate a unique username
  const newDate = 'Post' + new Date().getTime();
  const service = {
    "username": newDate,
    "score": 0
  };

  // Create a user and verify it returns 201
  it("Create new user", async function () {
    const response = await request.post("/user").send(service)
    expect(response.status).to.eql(201);
  });

  // Create same user again and verify response is 400
  it("Verify adding new user again gives 400", async function () {
    const response = await request.post("/user").send(service)
    expect(response.status).to.eql(400);
  });

});