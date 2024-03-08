import { Router } from "express";
import { createUsuarioController } from "../../controllers/usuario.controller";
import admMeddleware from "../../middlewares/adm.middleware";

const usuarioRoutes = Router();

usuarioRoutes.post("", admMeddleware, createUsuarioController);

export default usuarioRoutes;
