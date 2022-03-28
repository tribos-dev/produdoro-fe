import { TarefaAdicionada } from './../../interface/tarefaAdicionada';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css'],
})
export class TarefaComponent implements OnInit {
  mostra: boolean = true;
  formTarefa: TarefaAdicionada = { id: 0, titulo: '', repeticao: 1 };
  listaTarefas: TarefaAdicionada[] = [];

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.listaTarefas.push(this.formTarefa);
    this.formTarefa.id = this.formTarefa.id + 1;
    console.log(this.formTarefa);
  }

  mostraForm() {
    this.mostra = !this.mostra;
  }

  adicionaNovaTarefa(id: number, titulo: string, repeticao: number) {
    this.formTarefa = new TarefaAdicionada(id, titulo, repeticao);
  }

  deleteTarefa(id: number) {
    const index = this.listaTarefas.findIndex((s) => s.id == id);
    this.listaTarefas.splice(index, 1);
  }

  limpaForm() {
    //não consegui efetuar a aplicabilidade
    this.formTarefa.titulo = '';
    this.formTarefa.repeticao = 1;
  }
}
