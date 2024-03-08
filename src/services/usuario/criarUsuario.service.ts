import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";
import { UsuarioRequet } from "../../interfaces/usuario";
import {
  createUsuarioSerializer,
  UsuarioSemSenhaSerializer,
} from "../../serializers/usuario.serializer";
import createError from "http-errors";

const prisma = new PrismaClient();

const createUsuarioService = async (data: UsuarioRequet) => {
  const serializerUsuario = await createUsuarioSerializer.validate(data, {
    stripUnknown: true,
    abortEarly: false,
  });

  const { name, email, senha } = serializerUsuario;

  const UsuarioExiste = await prisma.usuario.findUnique({
    where: {
      email,
    },
  });

  if (UsuarioExiste) {
    throw createError.BadRequest("Email já cadastrado!");
  }

  const hashedSenha = await hash(senha, 10);

  const createData = await prisma.usuario.create({
    data: {
      name,
      email,
      senha: hashedSenha,
    },
  });
  const UsuarioOutput = await UsuarioSemSenhaSerializer.validate(createData, {
    stripUnknown: true,
  });

  return UsuarioOutput;
};

export default createUsuarioService;
