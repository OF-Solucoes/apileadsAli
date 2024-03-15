"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const cliente_serializer_1 = require("../../serializers/cliente.serializer");
const http_errors_1 = __importDefault(require("http-errors"));
const prisma = new client_1.PrismaClient();
const criarClienteService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const estSerializer = yield cliente_serializer_1.clienteSerializer.validate(data, {
        stripUnknown: true,
        abortEarly: false,
    });
    const { empresa, cnpj, ativo } = estSerializer;
    const clienteExiste = yield prisma.cliente.findUnique({
        where: { cnpj: cnpj },
    });
    if (clienteExiste) {
        throw http_errors_1.default.BadRequest("Cliente já existe!");
    }
    const createCliente = yield prisma.cliente.create({
        data: {
            empresa,
            cnpj,
            ativo,
        },
    });
    return createCliente;
});
exports.default = criarClienteService;
