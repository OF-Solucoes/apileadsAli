import { Router } from "express";
import usuarioRoutes from "./usuario/usuario.routes";
import loginRoutes from "./login/login.routes";
import clienteRoutes from "./cliente/cliente.routes";

const routes = Router();

routes.use("/usuario", usuarioRoutes);
routes.use("/login", loginRoutes);
routes.use("/cliente", clienteRoutes);

export default routes;
