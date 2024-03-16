"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUsuarioController = void 0;
const criarUsuario_service_1 = __importDefault(require("../services/usuario/criarUsuario.service"));
const createUsuarioController = async (req, res) => {
    try {
        const { ...data } = req.body;
        const novoUsuario = await (0, criarUsuario_service_1.default)(data);
        return res.status(201).json(novoUsuario);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({
                message: error.message,
            });
        }
    }
};
exports.createUsuarioController = createUsuarioController;
