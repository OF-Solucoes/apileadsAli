import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const excluirClienteService = async (idCliente: number) => {
  const clienteExcluir = await prisma.cliente.delete({
    where: { id: idCliente },
  });
  return clienteExcluir;
};

export default excluirClienteService;
