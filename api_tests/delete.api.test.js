const supertest = require('supertest')
const request = supertest('https://supervillain.herokuapp.com/v1')
const expect = require("chai").expect;

describe("POST users", function () {
    const newDate = 'Delete' + new Date().getTime();
    const service = {
        "username": newDate,
        "score": 0
    };


    beforeAll(() => {
        request.post("/user").send(service);
    });

    it("Verify delete user", async function () {
        const response = await request.delete("/user/").send(service);
        expect(response.status).to.eql(401);
    });

});