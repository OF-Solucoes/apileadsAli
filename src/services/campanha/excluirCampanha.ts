import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const excluirCampanhaService = async (idCamp: number) => {
  await prisma.campanha.delete({
    where: { id: idCamp },
  });
  return "Campanha excluída";
};

export default excluirCampanhaService;
