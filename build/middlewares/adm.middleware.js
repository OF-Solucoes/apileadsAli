"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const admMeddleware = async (req, res, next) => {
    const { ...data } = req.body;
    const senhaadm = data.senha;
    if (senhaadm !== process.env.senhaadm) {
        return res.status(403).json({ message: "Você não tem permissão!" });
    }
    next();
};
exports.default = admMeddleware;
