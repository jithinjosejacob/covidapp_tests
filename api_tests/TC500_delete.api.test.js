const supertest = require('supertest')
const request = supertest(process.env.api_url);
const expect = require("chai").expect;

describe("TC500:DELETE users test suite", function () {
    // Username needs to be unique. concat Post and current time to generate a unique username.
    const newDate = 'Delete' + new Date().getTime();
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

    beforeAll(() => {
        request.post("/user").send(service);
    });

    // Verify that delete user returns 401 status.
    it("TC501:Verify delete user", async function () {
        const response = await request.delete("/user").send(service);
        expect(response.status).to.eql(401);
    });

    // Deleting a user with invalid json and verify that response returns 400.
    it("TC502:Verify that using an invalid json returns 400", async function () {
        const response = await request.post("/user").send(invalidservice)
        expect(response.status).to.eql(400);
    });

});