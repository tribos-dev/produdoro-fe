import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Produdoro } from '../interface/produdoro';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SessionSetting } from './setting.enum';
import { SessaoService } from './sessao.service';

@Injectable({
  providedIn: 'root'
})
export class ProdudoroService {

  apiUrl = '${environment.apiUrl}';
  
  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private sessao: SessaoService) { }
  
  mudaStatusParaFoco(id: number){
    return this.http.get<Produdoro>('${this.apiUrl}/${id}/foco');
  }

  mudaStatusParaPausaCurta(id: number){
    return this.http.get<Produdoro>('${this.apiUrl}/${id}/pausaCurta');
  }

  mudaStatusParaPausaLonga(id: number){
    return this.http.get<Produdoro>('${this.apiUrl}/${id}/pausaLonga');
  }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top"
    })
  }

  incrementaContadorPomodoro(): void {
    const pomodoros = this.sessao.get(SessionSetting.NumeroDePomodoros, 0) +1;
    this.sessao.set(SessionSetting.NumeroDePomodoros, pomodoros);
  }

  limpaContadorPomodoro(): void {
    const pomodoros = this.sessao.get(SessionSetting.NumeroDePomodoros, 0) *0;
    this.sessao.set(SessionSetting.NumeroDePomodoros, pomodoros);
  }
}
