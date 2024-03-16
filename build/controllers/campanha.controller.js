"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.excluirCampanhaController = exports.listarCampanhasController = exports.alterarCampanhaController = exports.criarCampanhaController = void 0;
const criarCampanha_service_1 = __importDefault(require("../services/campanha/criarCampanha.service"));
const alterarCampanha_service_1 = __importDefault(require("../services/campanha/alterarCampanha.service"));
const excluirCampanha_1 = __importDefault(require("../services/campanha/excluirCampanha"));
const listarCampanha_1 = __importDefault(require("../services/campanha/listarCampanha"));
const criarCampanhaController = async (req, res) => {
    try {
        const { ...dataCamp } = req.body;
        const idCliente = parseInt(req.params.idCliente, 10);
        const newCamp = await (0, criarCampanha_service_1.default)(dataCamp, idCliente);
        return res.status(201).json(newCamp);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({
                message: error.message,
            });
        }
    }
};
exports.criarCampanhaController = criarCampanhaController;
const alterarCampanhaController = async (req, res) => {
    try {
        const data = req.body;
        const idCamp = parseInt(req.params.idCamp, 10);
        const campAlterado = await (0, alterarCampanha_service_1.default)(data, idCamp);
        return res.status(200).json(campAlterado);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({
                message: error.message,
            });
        }
    }
};
exports.alterarCampanhaController = alterarCampanhaController;
const listarCampanhasController = async (req, res) => {
    try {
        const Camps = await (0, listarCampanha_1.default)();
        return res.status(200).json(Camps);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({
                message: error.message,
            });
        }
    }
};
exports.listarCampanhasController = listarCampanhasController;
const excluirCampanhaController = async (req, res) => {
    try {
        const idCamp = parseInt(req.params.idCamp, 10);
        const est = await (0, excluirCampanha_1.default)(idCamp);
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
exports.excluirCampanhaController = excluirCampanhaController;
