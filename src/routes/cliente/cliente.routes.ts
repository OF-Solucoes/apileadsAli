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
clienteRoutes.patch("", autorizadoMiddlewares, alterarClienteController);
clienteRoutes.get("", autorizadoMiddlewares, listarClienteController);
clienteRoutes.delete("", autorizadoMiddlewares, excluirClienteController);

export default clienteRoutes;
