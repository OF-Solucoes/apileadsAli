import { PrismaClient } from "@prisma/client";
import createError from "http-errors";
import { campanhaRequest } from "../../interfaces/campanha";
import { clienteSerializer } from "../../serializers/cliente.serializer";
import { campanhaSerializer } from "../../serializers/campanha.serializer";

const prisma = new PrismaClient();

const criarCampanhaService = async (
  data: campanhaRequest,
  idCleinte: number
) => {
  const campSerializer = await campanhaSerializer.validate(data, {
    stripUnknown: true,
    abortEarly: false,
  });

  const { descricao, observ, ativa } = campSerializer;

  const campExiste = await prisma.campanha.findFirst({
    where: { descricao: descricao },
  });

  if (campExiste) {
    throw createError.BadRequest("Campanha já existe!");
  }

  const createCamp = await prisma.campanha.create({
    data: {
      descricao,
      observ,
      ativa,
      clienteid: idCleinte,
    },
  });

  return createCamp;
};

export default criarCampanhaService;
