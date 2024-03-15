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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
const criarLeadController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = __rest(req.body, []);
        const idCamp = parseInt(req.params.idCamp, 10);
        const newLead = yield (0, criarLead_service_1.default)(data, idCamp);
        return res.status(201).json(newLead);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({
                message: error.message,
            });
        }
    }
});
exports.criarLeadController = criarLeadController;
const alterarLeadController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const idLead = parseInt(req.params.idLead, 10);
        const leadAlterado = yield (0, alterarLead_service_1.default)(data, idLead);
        return res.status(200).json(leadAlterado);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({
                message: error.message,
            });
        }
    }
});
exports.alterarLeadController = alterarLeadController;
const listarLeadsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const leads = yield (0, listarLead_service_1.default)();
        return res.status(200).json(leads);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({
                message: error.message,
            });
        }
    }
});
exports.listarLeadsController = listarLeadsController;
const retornaLeadController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { idTel } = req.params;
        const lead = yield (0, retornarLead_service_1.default)(idTel);
        return res.status(200).json(lead);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({
                message: error.message,
            });
        }
    }
});
exports.retornaLeadController = retornaLeadController;
const excluirLeadController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idLead = parseInt(req.params.idLead, 10);
        const lead = yield (0, excluirLead_service_1.default)(idLead);
        return res.status(200).json(lead);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({
                message: error.message,
            });
        }
    }
});
exports.excluirLeadController = excluirLeadController;
