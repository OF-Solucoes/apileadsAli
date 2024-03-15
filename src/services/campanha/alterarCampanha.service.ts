import { PrismaClient } from "@prisma/client";
import { campanhaUpdate } from "../../interfaces/campanha";

const prisma = new PrismaClient();

const alterarCampanhaService = async (data: campanhaUpdate, idCamp: number) => {
  const campAlterar = prisma.campanha.update({
    where: { id: idCamp },
    data: data,
  });

  return campAlterar;
};

export default alterarCampanhaService;
