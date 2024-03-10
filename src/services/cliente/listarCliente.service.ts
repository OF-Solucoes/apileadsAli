import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const listarClienteService = async () => {
  const clientes = await prisma.cliente.findMany({});
  return clientes;
};

export default listarClienteService;
