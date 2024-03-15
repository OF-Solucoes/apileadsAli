import { Router } from "express";

import autorizadoMiddlewares from "../../middlewares/autorizado.middleare";
import {
  alterarLeadController,
  criarLeadController,
  excluirLeadController,
  listarLeadsController,
  retornaLeadController,
} from "../../controllers/lead.controller";

const leadRoutes = Router();

leadRoutes.post("/:idCamp", criarLeadController);
leadRoutes.patch("/:idLead", autorizadoMiddlewares, alterarLeadController);
leadRoutes.get("", autorizadoMiddlewares, listarLeadsController);
leadRoutes.get("/:idTel", retornaLeadController);
leadRoutes.delete("/:idLead", autorizadoMiddlewares, excluirLeadController);

export default leadRoutes;
