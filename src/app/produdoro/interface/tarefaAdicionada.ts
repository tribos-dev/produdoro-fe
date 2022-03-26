export interface Student{

  id: number;
  titulo: string;
  repeticao: number;
}

export class TarefaAdicionada {
  id: number;
  titulo: string ;
  repeticao: number;

  constructor(id: number, titulo: string, repeticao: number){
    this.id = id || 0;
    this.titulo = titulo || '';
    this.repeticao = repeticao || 1;

  }

  }
