"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.excluirLeadController = exports.retornaLeadController = exports.listarLeadsController = exports.alterarLeadController = exports.criarLeadController = void 0;
const criarLead_service_1 = __importDefault(require("../services/lead/criarLead.service"));
const alterarLead_service_1 = __importDefault(require("../services/lead/alterarLead.service"));
const listarLead_service_1 = __importDefault(require("../services/lead/listarLead.service"));
const excluirLead_service_1 = __importDefault(require("../services/lead/excluirLead.service"));
const retornarLead_service_1 = __importDefault(require("../services/lead/retornarLead.service"));
const criarLeadController = async (req, res) => {
    try {
        const { ...data } = req.body;
        const idCamp = parseInt(req.params.idCamp, 10);
        const newLead = await (0, criarLead_service_1.default)(data, idCamp);
        return res.status(201).json(newLead);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({
                message: error.message,
            });
        }
    }
};
exports.criarLeadController = criarLeadController;
const alterarLeadController = async (req, res) => {
    try {
        const data = req.body;
        const idLead = parseInt(req.params.idLead, 10);
        const leadAlterado = await (0, alterarLead_service_1.default)(data, idLead);
        return res.status(200).json(leadAlterado);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({
                message: error.message,
            });
        }
    }
};
exports.alterarLeadController = alterarLeadController;
const listarLeadsController = async (req, res) => {
    try {
        const leads = await (0, listarLead_service_1.default)();
        return res.status(200).json(leads);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({
                message: error.message,
            });
        }
    }
};
exports.listarLeadsController = listarLeadsController;
const retornaLeadController = async (req, res) => {
    try {
        const { idTel } = req.params;
        const lead = await (0, retornarLead_service_1.default)(idTel);
        return res.status(200).json(lead);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({
                message: error.message,
            });
        }
    }
};
exports.retornaLeadController = retornaLeadController;
const excluirLeadController = async (req, res) => {
    try {
        const idLead = parseInt(req.params.idLead, 10);
        const lead = await (0, excluirLead_service_1.default)(idLead);
        return res.status(200).json(lead);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({
                message: error.message,
            });
        }
    }
};
exports.excluirLeadController = excluirLeadController;
