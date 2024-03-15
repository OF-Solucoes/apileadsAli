import { PrismaClient } from "@prisma/client";
import { leadUpdate } from "../../interfaces/lead";

const prisma = new PrismaClient();

const alterarLeadService = async (data: leadUpdate, idLead: number) => {
  const leadAlterar = prisma.lead.update({
    where: { id: idLead },
    data: data,
  });

  return leadAlterar;
};

export default alterarLeadService;
