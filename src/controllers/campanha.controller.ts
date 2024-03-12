import { Request, Response } from "express";
import criarCampanhaService from "../services/campanha/criarCampanha.service";
import alterarCampanhaService from "../services/campanha/alterarCampanha.service";
import excluirCampanhaService from "../services/campanha/excluirCampanha";
import listarCampanhaService from "../services/campanha/listarCampanha";

const criarCampanhaController = async (req: Request, res: Response) => {
  try {
    const { ...dataCamp } = req.body;
    const { idCliente } = req.params;

    const newCamp = await criarCampanhaService(dataCamp, idCliente);
    return res.status(201).json(newCamp);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

const alterarCampanhaController = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const { idCamp } = req.params;
    const campAlterado = await alterarCampanhaService(data, idCamp);
    return res.status(200).json(campAlterado);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

const listarCampanhasController = async (req: Request, res: Response) => {
  try {
    const Camps = await listarCampanhaService();
    return res.status(200).json(Camps);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

const excluirCampanhaController = async (req: Request, res: Response) => {
  try {
    const { idCamp } = req.params;
    const est = await excluirCampanhaService(idCamp);
    return res.status(200).json(est);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};
export {
  criarCampanhaController,
  alterarCampanhaController,
  listarCampanhasController,
  excluirCampanhaController,
};
