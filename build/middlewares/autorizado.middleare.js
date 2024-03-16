"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const autorizadoMiddlewares = async (req, res, next) => {
    let tokenObjeto = req.headers.authorization;
    if (!tokenObjeto) {
        res.status(401).json({
            message: "Acesso negado",
        });
    }
    const token = tokenObjeto.split(" ")[1];
    jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY, (error, decoded) => {
        if (error) {
            return res.status(401).json({
                message: "Acesso negado",
            });
        }
    });
    next();
};
exports.default = autorizadoMiddlewares;
