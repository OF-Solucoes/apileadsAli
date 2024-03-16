"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const alterarLeadService = async (data, idLead) => {
    const leadAlterar = prisma.lead.update({
        where: { id: idLead },
        data: data,
    });
    return leadAlterar;
};
exports.default = alterarLeadService;
