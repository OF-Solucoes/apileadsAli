"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.excluirClienteController = exports.listarClienteController = exports.alterarClienteController = exports.criarClienteController = void 0;
const criarCliente_service_1 = __importDefault(require("../services/cliente/criarCliente.service"));
const alterarCliente_service_1 = __importDefault(require("../services/cliente/alterarCliente.service"));
const listarCliente_service_1 = __importDefault(require("../services/cliente/listarCliente.service"));
const excluirCliente_service_1 = __importDefault(require("../services/cliente/excluirCliente.service"));
const criarClienteController = async (req, res) => {
    try {
        const { ...dataCleinte } = req.body;
        const newCliente = await (0, criarCliente_service_1.default)(dataCleinte);
        return res.status(201).json(newCliente);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({
                message: error.message,
            });
        }
    }
};
exports.criarClienteController = criarClienteController;
const alterarClienteController = async (req, res) => {
    try {
        const data = req.body;
        const idCliente = parseInt(req.params.idCliente, 10);
        const clienteAlterado = await (0, alterarCliente_service_1.default)(data, idCliente);
        return res.status(200).json(clienteAlterado);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({
                message: error.message,
            });
        }
    }
};
exports.alterarClienteController = alterarClienteController;
const listarClienteController = async (req, res) => {
    try {
        const clientes = await (0, listarCliente_service_1.default)();
        return res.status(200).json(clientes);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({
                message: error.message,
            });
        }
    }
};
exports.listarClienteController = listarClienteController;
const excluirClienteController = async (req, res) => {
    try {
        const idCliente = parseInt(req.params.idCliente, 10);
        const est = await (0, excluirCliente_service_1.default)(idCliente);
        return res.status(200).json(est);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({
                message: error.message,
            });
        }
    }
};
exports.excluirClienteController = excluirClienteController;
