import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const listarLeadService = async () => {
  const leads = await prisma.lead.findMany({});
  return leads;
};

export default listarLeadService;
