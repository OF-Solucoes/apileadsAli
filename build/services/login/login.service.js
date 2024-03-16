"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcryptjs_1 = require("bcryptjs");
const http_errors_1 = __importDefault(require("http-errors"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma = new client_1.PrismaClient();
const loginService = async ({ email, senha }) => {
    const usuario = await prisma.usuario.findUnique({
        where: { email },
    });
    if (!usuario) {
        throw http_errors_1.default.NotFound("Usuário ou senha inválida");
    }
    const validarSenha = await (0, bcryptjs_1.compare)(senha, usuario.senha);
    if (!validarSenha) {
        throw http_errors_1.default.Unauthorized("Usuário ou senha inválida");
    }
    console.log(usuario);
    const accessToken = jsonwebtoken_1.default.sign({
        id: usuario.id,
    }, process.env.SECRET_KEY, {
        expiresIn: "15h",
        subject: usuario.id.toString(),
    });
    const { id, name } = usuario;
    return {
        usuario: name,
        accessToken,
        idUsuario: id,
    };
};
exports.default = loginService;
