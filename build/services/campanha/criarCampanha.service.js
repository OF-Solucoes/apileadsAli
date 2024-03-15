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
const http_errors_1 = __importDefault(require("http-errors"));
const campanha_serializer_1 = require("../../serializers/campanha.serializer");
const prisma = new client_1.PrismaClient();
const criarCampanhaService = (data, idCleinte) => __awaiter(void 0, void 0, void 0, function* () {
    const campSerializer = yield campanha_serializer_1.campanhaSerializer.validate(data, {
        stripUnknown: true,
        abortEarly: false,
    });
    const { descricao, observ, ativa } = campSerializer;
    const campExiste = yield prisma.campanha.findFirst({
        where: { descricao: descricao },
    });
    if (campExiste) {
        throw http_errors_1.default.BadRequest("Campanha já existe!");
    }
    const createCamp = yield prisma.campanha.create({
        data: {
            descricao,
            observ,
            ativa,
            clienteid: idCleinte,
        },
    });
    return createCamp;
});
exports.default = criarCampanhaService;
