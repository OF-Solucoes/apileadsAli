import { Router } from "express";
import autorizadoMiddlewares from "../../middlewares/autorizado.middleare";
import {
  alterarCampanhaController,
  criarCampanhaController,
  excluirCampanhaController,
  listarCampanhasController,
} from "../../controllers/campanha.controller";

const campanhaRoutes = Router();

campanhaRoutes.post(
  "/:idCliente",
  autorizadoMiddlewares,
  criarCampanhaController
);
campanhaRoutes.patch(
  "/:idCamp",
  autorizadoMiddlewares,
  alterarCampanhaController
);
campanhaRoutes.get("", autorizadoMiddlewares, listarCampanhasController);
campanhaRoutes.delete(
  "/:idCamp",
  autorizadoMiddlewares,
  excluirCampanhaController
);

export default campanhaRoutes;
