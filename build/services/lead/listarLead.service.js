"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const listarLeadService = async () => {
    const leads = await prisma.lead.findMany({
        include: {
            campanha: {
                select: {
                    descricao: true,
                    ativa: true,
                    cliente: true,
                },
            },
        },
    });
    return leads;
};
exports.default = listarLeadService;
