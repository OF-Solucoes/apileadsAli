import { Request, Response } from "express";
import { loginRequest } from "../interfaces/login";
import loginService from "../services/login/login.service";

const createLoginController = async (req: Request, res: Response) => {
  try {
    const dataLogin: loginRequest = req.body;
    const login = await loginService(dataLogin);
    return res.json(login);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

export default createLoginController;
