"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const excluirCampanhaService = async (idCamp) => {
    await prisma.campanha.delete({
        where: { id: idCamp },
    });
    return "Campanha excluída";
};
exports.default = excluirCampanhaService;
