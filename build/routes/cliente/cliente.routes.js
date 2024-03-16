"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cliente_controller_1 = require("../../controllers/cliente.controller");
const autorizado_middleare_1 = __importDefault(require("../../middlewares/autorizado.middleare"));
const clienteRoutes = (0, express_1.Router)();
clienteRoutes.post("", autorizado_middleare_1.default, cliente_controller_1.criarClienteController);
clienteRoutes.patch("/:idCliente", autorizado_middleare_1.default, cliente_controller_1.alterarClienteController);
clienteRoutes.get("", autorizado_middleare_1.default, cliente_controller_1.listarClienteController);
clienteRoutes.delete("/:idCliente", autorizado_middleare_1.default, cliente_controller_1.excluirClienteController);
exports.default = clienteRoutes;
