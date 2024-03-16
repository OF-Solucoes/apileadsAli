"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_service_1 = __importDefault(require("../services/login/login.service"));
const createLoginController = async (req, res) => {
    try {
        const dataLogin = req.body;
        const login = await (0, login_service_1.default)(dataLogin);
        return res.json(login);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({
                message: error.message,
            });
        }
    }
};
exports.default = createLoginController;
