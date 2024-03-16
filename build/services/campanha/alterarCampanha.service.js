"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const alterarCampanhaService = async (data, idCamp) => {
    const campAlterar = prisma.campanha.update({
        where: { id: idCamp },
        data: data,
    });
    return campAlterar;
};
exports.default = alterarCampanhaService;
