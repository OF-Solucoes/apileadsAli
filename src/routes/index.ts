import { Router } from "express";
import usuarioRoutes from "./usuario/usuario.routes";
import loginRoutes from "./login/login.routes";
import clienteRoutes from "./cliente/cliente.routes";
import campanhaRoutes from "./campanha";
import leadRoutes from "./lead";

const routes = Router();

routes.use("/usuario", usuarioRoutes);
routes.use("/login", loginRoutes);
routes.use("/cliente", clienteRoutes);
routes.use("/campanha", campanhaRoutes);
routes.use("/lead", leadRoutes);

export default routes;
