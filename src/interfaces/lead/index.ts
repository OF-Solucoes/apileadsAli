export interface leadRequest {
  tel: string;
  nome: string;
  email: string;
  obs: string;
  envCliente: boolean;
}

export interface leadUpdate {
  tel?: string;
  nome?: string;
  email?: string;
  obs?: string;
  envCliente?: boolean;
}
