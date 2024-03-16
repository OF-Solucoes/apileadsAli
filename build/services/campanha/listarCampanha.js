"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
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
exports.default = listarCampanhaService;
