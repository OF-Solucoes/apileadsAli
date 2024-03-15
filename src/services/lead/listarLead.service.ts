import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const listarLeadService = async () => {
  const leads = await prisma.lead.findMany({
    include: {
      campanha: {
        select: {
          descricao: true,
          ativa: true,
          cliente: true,
        },
      },
    },
  });
  return leads;
};

export default listarLeadService;
