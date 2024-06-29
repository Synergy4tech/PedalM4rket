import { Request, Response } from "express";

// Mock database
const users: any[] = [];

export const register = (req: Request, res: Response) => {
  const { cpfCnpj, nome, senha, tipo } = req.body;

  if (!cpfCnpj || !nome || !senha || !tipo) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }

  // Simples validação de CPF/CNPJ
  if (cpfCnpj.length !== 11 && cpfCnpj.length !== 14) {
    return res.status(400).json({ error: "CPF/CNPJ inválido." });
  }

  // Verificar duplicidade de CPF/CNPJ
  const userExists = users.find((user) => user.cpfCnpj === cpfCnpj);
  if (userExists) {
    return res.status(400).json({ error: "Usuário já cadastrado." });
  }

  const newUser = { id: users.length + 1, cpfCnpj, nome, senha, tipo };
  users.push(newUser);
  res.status(201).json(newUser);
};

export const login = (req: Request, res: Response) => {
  const { cpfCnpj, senha } = req.body;

  const user = users.find(
    (user) => user.cpfCnpj === cpfCnpj && user.senha === senha
  );
  if (!user) {
    return res.status(400).json({ error: "CPF/CNPJ ou senha incorretos." });
  }

  res.status(200).json(user);
};
