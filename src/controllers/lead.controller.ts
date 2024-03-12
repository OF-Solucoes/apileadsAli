import { Request, Response } from "express";
import criarLeadService from "../services/lead/criarLead.service";
import alterarLeadService from "../services/lead/alterarLead.service";
import listarLeadService from "../services/lead/listarLead.service";
import excluirLeadService from "../services/lead/excluirLead.service";

const criarLeadController = async (req: Request, res: Response) => {
  try {
    const { ...data } = req.body;
    const { idCamp } = req.params;

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
    const { idLead } = req.params;
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

const excluirLeadController = async (req: Request, res: Response) => {
  try {
    const { idLead } = req.params;
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
  excluirLeadController,
};
