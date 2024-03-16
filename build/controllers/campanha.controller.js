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
exports.excluirCampanhaController = exports.listarCampanhasController = exports.alterarCampanhaController = exports.criarCampanhaController = void 0;
const criarCampanha_service_1 = __importDefault(require("../services/campanha/criarCampanha.service"));
const alterarCampanha_service_1 = __importDefault(require("../services/campanha/alterarCampanha.service"));
const excluirCampanha_1 = __importDefault(require("../services/campanha/excluirCampanha"));
const listarCampanha_1 = __importDefault(require("../services/campanha/listarCampanha"));
const criarCampanhaController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dataCamp = __rest(req.body, []);
        const idCliente = parseInt(req.params.idCliente, 10);
        const newCamp = yield (0, criarCampanha_service_1.default)(dataCamp, idCliente);
        return res.status(201).json(newCamp);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({
                message: error.message,
            });
        }
    }
});
exports.criarCampanhaController = criarCampanhaController;
const alterarCampanhaController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const idCamp = parseInt(req.params.idCamp, 10);
        const campAlterado = yield (0, alterarCampanha_service_1.default)(data, idCamp);
        return res.status(200).json(campAlterado);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({
                message: error.message,
            });
        }
    }
});
exports.alterarCampanhaController = alterarCampanhaController;
const listarCampanhasController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Camps = yield (0, listarCampanha_1.default)();
        return res.status(200).json(Camps);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({
                message: error.message,
            });
        }
    }
});
exports.listarCampanhasController = listarCampanhasController;
const excluirCampanhaController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idCamp = parseInt(req.params.idCamp, 10);
        const est = yield (0, excluirCampanha_1.default)(idCamp);
        return res.status(200).json(est);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({
                message: error.message,
            });
        }
    }
});
exports.excluirCampanhaController = excluirCampanhaController;
