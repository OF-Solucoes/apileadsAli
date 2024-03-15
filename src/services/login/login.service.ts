import { PrismaClient } from "@prisma/client";
import { loginRequest } from "../../interfaces/login";
import { compare } from "bcryptjs";
import createError from "http-errors";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

const loginService = async ({ email, senha }: loginRequest) => {
  const usuario = await prisma.usuario.findUnique({
    where: { email },
  });
  if (!usuario) {
    throw createError.NotFound("Usuário ou senha inválida");
  }
  const validarSenha = await compare(senha, usuario.senha);

  if (!validarSenha) {
    throw createError.Unauthorized("Usuário ou senha inválida");
  }
  console.log(usuario);
  const accessToken = jwt.sign(
    {
      id: usuario.id,
    },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "15h",
      subject: usuario.id.toString(),
    }
  );

  const { id, name } = usuario;

  return {
    usuario: name,
    accessToken,
    idUsuario: id,
  };
};

export default loginService;
