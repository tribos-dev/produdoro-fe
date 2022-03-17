import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css'],
})
export class TarefaComponent implements OnInit {
  formTarefa: any = {
    nome: '',
    repeticao: '',
  };

  onSubmit(form: any) {
    console.log(this.formTarefa);
    this.formTarefa;
  }

  constructor() {}

  ngOnInit(): void {}
  mostra: boolean = true;

  mostraForm() {
    this.mostra = !this.mostra;
  }

  mostraTarefa(mostra: boolean) {
    this.mostra = mostra;
  }
}
