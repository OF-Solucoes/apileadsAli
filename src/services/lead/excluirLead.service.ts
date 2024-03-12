import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const excluirLeadService = async (idLead: string) => {
  await prisma.lead.delete({
    where: { id: idLead },
  });
  return "Lead excluído";
};

export default excluirLeadService;
