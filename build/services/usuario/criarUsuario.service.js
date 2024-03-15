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
const bcryptjs_1 = require("bcryptjs");
const usuario_serializer_1 = require("../../serializers/usuario.serializer");
const http_errors_1 = __importDefault(require("http-errors"));
const prisma = new client_1.PrismaClient();
const createUsuarioService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const serializerUsuario = yield usuario_serializer_1.createUsuarioSerializer.validate(data, {
        stripUnknown: true,
        abortEarly: false,
    });
    const { name, email, senha } = serializerUsuario;
    const UsuarioExiste = yield prisma.usuario.findUnique({
        where: {
            email,
        },
    });
    if (UsuarioExiste) {
        throw http_errors_1.default.BadRequest("Email já cadastrado!");
    }
    const hashedSenha = yield (0, bcryptjs_1.hash)(senha, 10);
    const createData = yield prisma.usuario.create({
        data: {
            name,
            email,
            senha: hashedSenha,
        },
    });
    const UsuarioOutput = yield usuario_serializer_1.UsuarioSemSenhaSerializer.validate(createData, {
        stripUnknown: true,
    });
    return UsuarioOutput;
});
exports.default = createUsuarioService;
