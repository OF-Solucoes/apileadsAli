"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const alterarClienteService = async (data, idCliente) => {
    const clienteAlterar = prisma.cliente.update({
        where: { id: idCliente },
        data: data,
    });
    return clienteAlterar;
};
exports.default = alterarClienteService;
