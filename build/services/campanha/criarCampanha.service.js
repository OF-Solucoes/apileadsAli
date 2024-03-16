"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const http_errors_1 = __importDefault(require("http-errors"));
const campanha_serializer_1 = require("../../serializers/campanha.serializer");
const prisma = new client_1.PrismaClient();
const criarCampanhaService = async (data, idCleinte) => {
    const campSerializer = await campanha_serializer_1.campanhaSerializer.validate(data, {
        stripUnknown: true,
        abortEarly: false,
    });
    const { descricao, observ, ativa } = campSerializer;
    const campExiste = await prisma.campanha.findFirst({
        where: { descricao: descricao },
    });
    if (campExiste) {
        throw http_errors_1.default.BadRequest("Campanha já existe!");
    }
    const createCamp = await prisma.campanha.create({
        data: {
            descricao,
            observ,
            ativa,
            clienteid: idCleinte,
        },
    });
    return createCamp;
};
exports.default = criarCampanhaService;
