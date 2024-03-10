export interface clienteRequest {
  empresa: string;
  cnpj: number;
  ativo: boolean;
}

export interface clienteResponse {
  id: string;
  empresa: string;
  cnpj: number;
  ativo: boolean;
}

export interface clienteUpdate {
  empresa?: string;
  cnpj?: number;
  ativo?: boolean;
}
