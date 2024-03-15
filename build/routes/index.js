"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_routes_1 = __importDefault(require("./usuario/usuario.routes"));
const login_routes_1 = __importDefault(require("./login/login.routes"));
const cliente_routes_1 = __importDefault(require("./cliente/cliente.routes"));
const campanha_1 = __importDefault(require("./campanha"));
const lead_1 = __importDefault(require("./lead"));
const routes = (0, express_1.Router)();
routes.use("/usuario", usuario_routes_1.default);
routes.use("/login", login_routes_1.default);
routes.use("/cliente", cliente_routes_1.default);
routes.use("/campanha", campanha_1.default);
routes.use("/lead", lead_1.default);
exports.default = routes;
