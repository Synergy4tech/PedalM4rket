import request from "supertest";
import app from "../src/index";

describe("Auth Endpoints", () => {
  it("should register a new user", async () => {
    const res = await request(app).post("/api/auth/register").send({
      cpfCnpj: "12345678901",
      nome: "João",
      senha: "senha123",
      tipo: "fisica",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("id");
  });

  it("should not register a user with invalid CPF/CNPJ", async () => {
    const res = await request(app).post("/api/auth/register").send({
      cpfCnpj: "123",
      nome: "João",
      senha: "senha123",
      tipo: "fisica",
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("error");
  });

  it("should not register a user with existing CPF/CNPJ", async () => {
    await request(app).post("/api/auth/register").send({
      cpfCnpj: "12345678901",
      nome: "João",
      senha: "senha123",
      tipo: "fisica",
    });

    const res = await request(app).post("/api/auth/register").send({
      cpfCnpj: "12345678901",
      nome: "Maria",
      senha: "senha456",
      tipo: "fisica",
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("error");
  });

  it("should login a user", async () => {
    await request(app).post("/api/auth/register").send({
      cpfCnpj: "12345678901",
      nome: "João",
      senha: "senha123",
      tipo: "fisica",
    });

    const res = await request(app).post("/api/auth/login").send({
      cpfCnpj: "12345678901",
      senha: "senha123",
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("id");
  });

  it("should not login a user with incorrect password", async () => {
    await request(app).post("/api/auth/register").send({
      cpfCnpj: "12345678901",
      nome: "João",
      senha: "senha123",
      tipo: "fisica",
    });

    const res = await request(app).post("/api/auth/login").send({
      cpfCnpj: "12345678901",
      senha: "wrongpassword",
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("error");
  });
});
