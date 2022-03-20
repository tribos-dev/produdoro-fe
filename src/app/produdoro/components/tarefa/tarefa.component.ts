import { TarefaAdicionada } from './../../interface/tarefaAdicionada';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css'],
})
export class TarefaComponent implements OnInit {
  mostra: boolean = true;
  formTarefa: TarefaAdicionada = {titulo:'', repeticao:0};
  listaTarefas: TarefaAdicionada[] = [];

  constructor() {}

  ngOnInit(): void {
    this.formTarefa = new TarefaAdicionada();
  }

  onSubmit() {
    this.listaTarefas.push(this.formTarefa);
  }

  mostraForm() {
    this.mostra = !this.mostra;
  }

  adicionaNovaTarefa (){
    this.formTarefa = new TarefaAdicionada();
  }
}
