export interface UsuarioRequet {
  name: string;
  email: string;
  senha: string;
}

export interface UsuarioResponse {
  id: string;
  name: string;
  email: string;
  senha: string;
}

export interface UsuarioUpdate {
  name?: string;
  senha?: string;
  adm?: boolean;
}
