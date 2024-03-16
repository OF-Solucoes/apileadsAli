"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_controller_1 = require("../../controllers/usuario.controller");
const adm_middleware_1 = __importDefault(require("../../middlewares/adm.middleware"));
const usuarioRoutes = (0, express_1.Router)();
usuarioRoutes.post("", adm_middleware_1.default, usuario_controller_1.createUsuarioController);
exports.default = usuarioRoutes;
