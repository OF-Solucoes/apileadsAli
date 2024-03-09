import { Request, Response, NextFunction } from "express";
import jwt, { decode } from "jsonwebtoken";

const autorizadoMiddlewares = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let tokenObjeto = req.headers.authorization;

  if (!tokenObjeto) {
    res.status(401).json({
      message: "Acesso negado",
    });
  }

  const token = tokenObjeto!.split(" ")[1];

  jwt.verify(
    token,
    process.env.SECRET_KEY as string,
    (error: any, decoded: any) => {
      if (error) {
        return res.status(401).json({
          message: "Acesso negado",
        });
      }
    }
  );

  next();
};

export default autorizadoMiddlewares;
