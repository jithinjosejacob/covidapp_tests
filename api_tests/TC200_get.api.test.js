const supertest = require('supertest')
const request = supertest(process.env.api_url);
const expect = require("chai").expect;

describe("TC200:GET users test suite", function () {
  // Verify that valid url gives 200 response.
  it("TC201:Verify that GET call is successful for valid endpoint", async function () {
    const response = await request.get("/user");
    expect(response.status).to.eql(200);
  });

  // Verify that invalid url supplied -/users gives 404.
  it("TC202:Verify that GET call is unsuccessful for invalid endpoint", async function () {
    const response = await request.get("/users");
    expect(response.status).to.eql(404);
  });
});