import { Router } from "express";
import { createUsuarioController } from "../controllers/usuario.controller";
import usuarioRoutes from "./usuario/usuario.routes";

const routes = Router();

routes.use("/usuario", usuarioRoutes);

export default routes;
