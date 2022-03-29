export interface User {
  id: number;
  usuario: string;
  email: string;
  senha: string;
  createdAt: Date;
}

export class User {
  usuario: string;
  email:string;
  senha: string;

  constructor(
    usuario?: string,
    email?: string,
    senha?: string

  ) {
    this.usuario = usuario || '';
    this.email = email || '';
    this.senha = senha || '';
  }
}