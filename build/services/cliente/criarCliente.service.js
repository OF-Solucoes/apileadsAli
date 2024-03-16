"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const cliente_serializer_1 = require("../../serializers/cliente.serializer");
const http_errors_1 = __importDefault(require("http-errors"));
const prisma = new client_1.PrismaClient();
const criarClienteService = async (data) => {
    const estSerializer = await cliente_serializer_1.clienteSerializer.validate(data, {
        stripUnknown: true,
        abortEarly: false,
    });
    const { empresa, cnpj, ativo } = estSerializer;
    const clienteExiste = await prisma.cliente.findUnique({
        where: { cnpj: cnpj },
    });
    if (clienteExiste) {
        throw http_errors_1.default.BadRequest("Cliente já existe!");
    }
    const createCliente = await prisma.cliente.create({
        data: {
            empresa,
            cnpj,
            ativo,
        },
    });
    return createCliente;
};
exports.default = criarClienteService;
