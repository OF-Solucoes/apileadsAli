import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { env } from "process";

const prisma = new PrismaClient();

const admMeddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { ...data } = req.body;
  const senhaadm = data.senha;

  if (senhaadm !== process.env.senhaadm) {
    return res.status(403).json({ message: "Você não tem permissão!" });
  }
  next();
};

export default admMeddleware;
