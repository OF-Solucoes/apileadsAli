export interface clienteRequest {
  empresa: string;
  cnpj: string;
  ativo: boolean;
}

export interface clienteResponse {
  id: string;
  empresa: string;
  cnpj: string;
  ativo: boolean;
}

export interface clienteUpdate {
  empresa?: string;
  cnpj?: string;
  ativo?: boolean;
}
