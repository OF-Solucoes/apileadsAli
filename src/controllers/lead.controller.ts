import { Request, Response } from "express";
import criarLeadService from "../services/lead/criarLead.service";
import alterarLeadService from "../services/lead/alterarLead.service";
import listarLeadService from "../services/lead/listarLead.service";
import excluirLeadService from "../services/lead/excluirLead.service";
import retornarLeadService from "../services/lead/retornarLead.service";

const criarLeadController = async (req: Request, res: Response) => {
  try {
    const { ...data } = req.body;
    const idCamp = parseInt(req.params.idCamp, 10);

    const newLead = await criarLeadService(data, idCamp);
    return res.status(201).json(newLead);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

const alterarLeadController = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const idLead = parseInt(req.params.idLead, 10);
    const leadAlterado = await alterarLeadService(data, idLead);
    return res.status(200).json(leadAlterado);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

const listarLeadsController = async (req: Request, res: Response) => {
  try {
    const leads = await listarLeadService();
    return res.status(200).json(leads);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

const retornaLeadController = async (req: Request, res: Response) => {
  try {
    const { idTel } = req.params;
    const lead = await retornarLeadService(idTel);
    return res.status(200).json(lead);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

const excluirLeadController = async (req: Request, res: Response) => {
  try {
    const idLead = parseInt(req.params.idLead, 10);
    const lead = await excluirLeadService(idLead);
    return res.status(200).json(lead);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};
export {
  criarLeadController,
  alterarLeadController,
  listarLeadsController,
  retornaLeadController,
  excluirLeadController,
};
