const supertest = require("supertest");
const server = require("../server");
const db = require("../data/dbConfig");

beforeEach(async ()=> {
    //run the seeds programatically before each test to start fresh
    await db.seed.run()
});

afterAll(async () => {
    //close the database connection so the test process doens't hang or give a warning
    await db.destroy()
});

describe("ventureBros intergration tests", () => {
    it("GET /ventureBros", async () => {
        const res = await supertest(server).get("/ventureBros")
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe("application/json")
        expect(res.body.length).toBeGreaterThanOrEqual(5)
        expect(res.body[1].name).toBe("Brock Sampson")
    })
    it("GET /ventureBros/:id", async() =>{
        const res = await supertest(server).get("/ventureBros/4")
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe("application/json")
        expect(res.body.name).toBe("Hank Venture")
    })
    it("POST /ventureBros", async () => {
        const res = await supertest(server).post("/ventureBros").send({ name: "Jonas Venture Jr"})
        expect(res.statusCode).toBe(201)
        expect(res.type).toBe("application/json")
        expect(res.body.name).toBe("Jonas Venture Jr")
    })
    it("DELETE /ventureBros/:id", async () => {
        const res = await supertest(server).delete("/ventureBros/16")
        expect(res.statusCode).toBe(200)
        expect(res.body.message).toBe("Venture deleted successfully.")
       //console.log(res.body.message)
    })
})