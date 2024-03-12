import { PrismaClient } from "@prisma/client";
import { leadUpdate } from "../../interfaces/lead";

const prisma = new PrismaClient();

const alterarLeadService = async (data: leadUpdate, idCliente: string) => {
  const leadAlterar = prisma.lead.update({
    where: { id: idCliente },
    data: data,
    // include: {
    //   campanha: {
    //     select: {
    //       descricao: true,
    //       ativa: true,
    //       cliente: true,
    //     },
    //   },
    // },
  });

  return leadAlterar;
};

export default alterarLeadService;
