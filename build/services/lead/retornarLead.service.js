"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const retornarLeadService = async (telefone) => {
    const lead = await prisma.lead.findUnique({
        where: { tel: telefone },
    });
    return lead;
};
exports.default = retornarLeadService;
