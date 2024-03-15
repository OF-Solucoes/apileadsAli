import { PrismaClient } from "@prisma/client";
import { clienteUpdate } from "../../interfaces/cliente";

const prisma = new PrismaClient();

const alterarClienteService = async (
  data: clienteUpdate,
  idCliente: number
) => {
  const clienteAlterar = prisma.cliente.update({
    where: { id: idCliente },
    data: data,
  });

  return clienteAlterar;
};

export default alterarClienteService;
