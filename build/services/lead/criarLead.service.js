"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const http_errors_1 = __importDefault(require("http-errors"));
const lead_serializer_1 = require("../../serializers/lead.serializer");
const prisma = new client_1.PrismaClient();
const criarLeadService = async (data, idCampanha) => {
    const leadsSerializer = await lead_serializer_1.leadSerializer.validate(data, {
        stripUnknown: true,
        abortEarly: false,
    });
    const { tel, nome, email, envCliente, observ } = leadsSerializer;
    const campExiste = await prisma.lead.findUnique({
        where: { tel: tel },
    });
    if (campExiste) {
        throw http_errors_1.default.BadRequest("Lead já cadastrado!");
    }
    const createLead = await prisma.lead.create({
        data: {
            tel,
            nome,
            email,
            observ,
            envCliente,
            campanhaid: idCampanha,
        },
    });
    return createLead;
};
exports.default = criarLeadService;
