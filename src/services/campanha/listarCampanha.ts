import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const listarCampanhaService = async () => {
  const estabelecimentos = await prisma.campanha.findMany({
    include: {
      cliente: {
        select: {
          empresa: true,
          ativo: true,
        },
      },
    },
    orderBy: {
      descricao: "asc",
    },
  });
  return estabelecimentos;
};

export default listarCampanhaService;
