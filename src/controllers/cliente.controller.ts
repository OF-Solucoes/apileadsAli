import { Request, Response } from "express";
import criarClienteService from "../services/cliente/criarCliente.service";
import alterarClienteService from "../services/cliente/alterarCliente.service";
import listarClienteService from "../services/cliente/listarCliente.service";
import excluirClienteService from "../services/cliente/excluirCliente.service";

const criarClienteController = async (req: Request, res: Response) => {
  try {
    const { ...dataCleinte } = req.body;

    const newCliente = await criarClienteService(dataCleinte);
    return res.status(201).json(newCliente);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

const alterarClienteController = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const { idCliente } = req.params;
    const clienteAlterado = await alterarClienteService(data, idCliente);
    return res.status(200).json(clienteAlterado);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

const listarClienteController = async (req: Request, res: Response) => {
  try {
    const clientes = await listarClienteService();
    return res.status(200).json(clientes);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

const excluirClienteController = async (req: Request, res: Response) => {
  try {
    const { idEst } = req.params;
    const est = await excluirClienteService(idEst);
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
  criarClienteController,
  alterarClienteController,
  listarClienteController,
  excluirClienteController,
};
