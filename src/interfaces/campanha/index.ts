export interface campanhaRequest {
  descricao: string;
  observ: string;
  ativo: boolean;
}

export interface campanhaUpdate {
  descricao?: string;
  observ?: string;
  ativo?: boolean;
}
