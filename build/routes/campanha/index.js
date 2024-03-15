"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const autorizado_middleare_1 = __importDefault(require("../../middlewares/autorizado.middleare"));
const campanha_controller_1 = require("../../controllers/campanha.controller");
const campanhaRoutes = (0, express_1.Router)();
campanhaRoutes.post("/:idCliente", autorizado_middleare_1.default, campanha_controller_1.criarCampanhaController);
campanhaRoutes.patch("/:idCamp", autorizado_middleare_1.default, campanha_controller_1.alterarCampanhaController);
campanhaRoutes.get("", autorizado_middleare_1.default, campanha_controller_1.listarCampanhasController);
campanhaRoutes.delete("/:idCamp", autorizado_middleare_1.default, campanha_controller_1.excluirCampanhaController);
exports.default = campanhaRoutes;
