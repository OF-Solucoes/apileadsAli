"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const excluirClienteService = async (idCliente) => {
    const clienteExcluir = await prisma.cliente.delete({
        where: { id: idCliente },
    });
    return clienteExcluir;
};
exports.default = excluirClienteService;
