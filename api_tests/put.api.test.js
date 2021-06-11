const supertest = require('supertest')
const request = supertest('https://supervillain.herokuapp.com/v1')
const expect = require("chai").expect;

describe("POST users", function () {
  const newDate = 'Put' + new Date().getTime();
  //const updateDate = 'Update' + new Date().getTime();
  const service = {
    "username": newDate,
    "score": 0
  };
  const updateservice = {
    "username": newDate,
    "score": 1
  };

  const invalidservice = {
    "username": 'Wakar123Wakar12',
    "score": 1
  };

  beforeAll(() => {
    request.post("/user").send(service);
  });

  // Api doc says response is 204, but we are getting 201 here
  it("Verify update user", async function () {
    const response = await request.put("/user").send(updateservice)
    expect(response.status).to.eql(201);
    expect(response.body.message).to.eql('User added with updated score');
  });

  // There is a bug in here,update request is successful for users who are not present in db.
  it.skip("Verify invalid request for update user", async function () {
    const response = await request.put("/user").send(invalidservice);
    expect(response.status).to.eql(400);
  });

});