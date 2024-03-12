import { Router } from "express";
import {
  alterarClienteController,
  criarClienteController,
  excluirClienteController,
  listarClienteController,
} from "../../controllers/cliente.controller";
import autorizadoMiddlewares from "../../middlewares/autorizado.middleare";

const clienteRoutes = Router();

clienteRoutes.post("", autorizadoMiddlewares, criarClienteController);
clienteRoutes.patch(
  "/:idCliente",
  autorizadoMiddlewares,
  alterarClienteController
);
clienteRoutes.get("", autorizadoMiddlewares, listarClienteController);
clienteRoutes.delete(
  "/:idCliente",
  autorizadoMiddlewares,
  excluirClienteController
);

export default clienteRoutes;
