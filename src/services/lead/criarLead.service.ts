import { PrismaClient } from "@prisma/client";
import createError from "http-errors";
import { leadRequest } from "../../interfaces/lead";
import { leadSerializer } from "../../serializers/lead.serializer";

const prisma = new PrismaClient();

const criarLeadService = async (data: leadRequest, idCampanha: string) => {
  const leadsSerializer = await leadSerializer.validate(data, {
    stripUnknown: true,
    abortEarly: false,
  });
  const { tel, nome, email, envCliente, observ } = leadsSerializer;

  const campExiste = await prisma.lead.findUnique({
    where: { tel: tel },
  });

  if (campExiste) {
    throw createError.BadRequest("Lead já cadastrado!");
  }

  const createLead = await prisma.lead.create({
    data: {
      tel,
      nome,
      email,
      observ,
      envCliente,
      campanhaid: idCampanha,
    },
  });

  return createLead;
};

export default criarLeadService;
