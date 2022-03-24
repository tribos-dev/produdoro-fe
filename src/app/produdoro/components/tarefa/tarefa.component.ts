import { TarefaAdicionada } from './../../interface/tarefaAdicionada';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css'],
})
export class TarefaComponent implements OnInit {
  mostra: boolean = true;
  formTarefa: TarefaAdicionada = { titulo: '', repeticao: 0 };
  listaTarefas: TarefaAdicionada[] = [];
  editar: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.formTarefa = new TarefaAdicionada();
  }

  onSubmit() {
    this.listaTarefas.push(this.formTarefa);
    console.log(this.formTarefa);
  }

  mostraForm() {
    this.mostra = !this.mostra;
  }

  adicionaNovaTarefa() {

    this.formTarefa = new TarefaAdicionada();

  }

  editaTarefa() {
    this.mostraForm();
    this.formTarefa = this.formTarefa;
    return this.formTarefa;

  }
}
