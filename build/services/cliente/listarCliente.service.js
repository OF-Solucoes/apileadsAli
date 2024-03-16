"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const listarClienteService = async () => {
    const clientes = await prisma.cliente.findMany({});
    return clientes;
};
exports.default = listarClienteService;
