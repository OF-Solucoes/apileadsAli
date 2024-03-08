import { Request, Response } from "express";
import createUsuarioService from "../services/usuario/criarUsuario.service";

const createUsuarioController = async (req: Request, res: Response) => {
  try {
    const { ...data } = req.body;

    const novoUsuario = await createUsuarioService(data);
    return res.status(201).json(novoUsuario);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

export { createUsuarioController };
