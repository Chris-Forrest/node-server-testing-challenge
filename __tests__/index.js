const supertest = require("supertest");
const server = require("../server");
const { testing } = require("../knexfile");

test("GET /", async () => {
    const res = await supertest(server).get("/")
    expect(res.statusCode).toBe(200)
    expect(res.type).toBe("application/json")
    //expect(res.body).toBe("Welcome")
})