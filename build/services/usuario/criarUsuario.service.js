"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcryptjs_1 = require("bcryptjs");
const usuario_serializer_1 = require("../../serializers/usuario.serializer");
const http_errors_1 = __importDefault(require("http-errors"));
const prisma = new client_1.PrismaClient();
const createUsuarioService = async (data) => {
    const serializerUsuario = await usuario_serializer_1.createUsuarioSerializer.validate(data, {
        stripUnknown: true,
        abortEarly: false,
    });
    const { name, email, senha } = serializerUsuario;
    const UsuarioExiste = await prisma.usuario.findUnique({
        where: {
            email,
        },
    });
    if (UsuarioExiste) {
        throw http_errors_1.default.BadRequest("Email já cadastrado!");
    }
    const hashedSenha = await (0, bcryptjs_1.hash)(senha, 10);
    const createData = await prisma.usuario.create({
        data: {
            name,
            email,
            senha: hashedSenha,
        },
    });
    const UsuarioOutput = await usuario_serializer_1.UsuarioSemSenhaSerializer.validate(createData, {
        stripUnknown: true,
    });
    return UsuarioOutput;
};
exports.default = createUsuarioService;
