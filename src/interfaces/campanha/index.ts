export interface campanhaRequest {
  descricao: string;
  obs: string;
  ativo: boolean;
}

export interface campanhaUpdate {
  descricao?: string;
  obs?: string;
  ativo?: boolean;
}
