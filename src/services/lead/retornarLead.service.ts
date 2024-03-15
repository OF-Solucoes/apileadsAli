import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const retornarLeadService = async (telefone: string) => {
  const lead = await prisma.lead.findUnique({
    where: { tel: telefone },
  });
  return lead;
};

export default retornarLeadService;
