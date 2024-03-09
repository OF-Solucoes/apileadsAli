import { Router } from "express";
import { createUsuarioController } from "../controllers/usuario.controller";
import usuarioRoutes from "./usuario/usuario.routes";
import loginRoutes from "./login/login.routes";

const routes = Router();

routes.use("/usuario", usuarioRoutes);
routes.use("/login", loginRoutes);

export default routes;
