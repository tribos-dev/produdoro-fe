import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produdoro } from '../interface/produdoro';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProdudoroService {

  apiUrl = '${environment.apiUrl}';

  
  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }
  
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
}
