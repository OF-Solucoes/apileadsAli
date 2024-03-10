import { PrismaClient, Usuario } from "@prisma/client";
import { clienteRequest } from "../../interfaces/cliente";
import { clienteSerializer } from "../../serializers/cliente.serializer";
import createError from "http-errors";

const prisma = new PrismaClient();

const criarClienteService = async (data: clienteRequest) => {
  const estSerializer = await clienteSerializer.validate(data, {
    stripUnknown: true,
    abortEarly: false,
  });

  const { empresa, cnpj, ativo } = estSerializer;

  const clienteExiste = await prisma.cliente.findFirst({
    where: { cnpj: cnpj },
  });

  if (clienteExiste) {
    throw createError.BadRequest("Cliente já existe!");
  }

  const createCliente = await prisma.cliente.create({
    data: {
      empresa,
      cnpj,
      ativo,
    },
  });

  return createCliente;
};

export default criarClienteService;
