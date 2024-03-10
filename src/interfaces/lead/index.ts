export interface leadRequest {
  contato: string;
  nome: string;
  email: string;
  obs: string;
  envCliente: boolean;
}

export interface leadUpdate {
  contato?: string;
  nome?: string;
  email?: string;
  obs?: string;
  envCliente?: boolean;
}
