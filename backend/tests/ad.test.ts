import request from "supertest";
import app from "../src/index";

describe("Ad Endpoints", () => {
  it("should create a new ad", async () => {
    const res = await request(app).post("/api/ads").send({
      title: "Bicicleta A",
      description: "Uma ótima bicicleta",
      price: 500,
      location: "São Paulo",
      userId: 1,
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("id");
  });

  it("should not create an ad with missing data", async () => {
    const res = await request(app).post("/api/ads").send({
      title: "Bicicleta B",
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("error");
  });

  it("should get all ads", async () => {
    const res = await request(app).get("/api/ads");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it("should get an ad by ID", async () => {
    const createRes = await request(app).post("/api/ads").send({
      title: "Bicicleta C",
      description: "Uma excelente bicicleta",
      price: 700,
      location: "Rio de Janeiro",
      userId: 1,
    });

    const adId = createRes.body.id;

    const getRes = await request(app).get(`/api/ads/${adId}`);
    expect(getRes.statusCode).toEqual(200);
    expect(getRes.body).toHaveProperty("id", adId);
  });

  it("should filter ads by price and location", async () => {
    await request(app).post("/api/ads").send({
      title: "Bicicleta D",
      description: "Uma bicicleta barata",
      price: 300,
      location: "São Paulo",
      userId: 1,
    });

    const res = await request(app).get("/api/ads?price=300&location=São Paulo");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body[0]).toHaveProperty("price", 300);
    expect(res.body[0]).toHaveProperty("location", "São Paulo");
  });
});
