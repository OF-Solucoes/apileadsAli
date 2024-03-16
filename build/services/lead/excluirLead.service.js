"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const excluirLeadService = async (idLead) => {
    await prisma.lead.delete({
        where: { id: idLead },
    });
    return "Lead excluído";
};
exports.default = excluirLeadService;
