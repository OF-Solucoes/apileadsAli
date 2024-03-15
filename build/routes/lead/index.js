"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const autorizado_middleare_1 = __importDefault(require("../../middlewares/autorizado.middleare"));
const lead_controller_1 = require("../../controllers/lead.controller");
const leadRoutes = (0, express_1.Router)();
leadRoutes.post("/:idCamp", lead_controller_1.criarLeadController);
leadRoutes.patch("/:idLead", autorizado_middleare_1.default, lead_controller_1.alterarLeadController);
leadRoutes.get("", autorizado_middleare_1.default, lead_controller_1.listarLeadsController);
leadRoutes.get("/:idTel", lead_controller_1.retornaLeadController);
leadRoutes.delete("/:idLead", autorizado_middleare_1.default, lead_controller_1.excluirLeadController);
exports.default = leadRoutes;
