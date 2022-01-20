import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produdoro } from '../interface/produdoro';

@Injectable({
  providedIn: 'root'
})
export class ProdudoroService {

  apiUrl = '${environment.apiUrl}';

  
  constructor( private http: HttpClient) { }

  mudaStatusParaFoco(id: number){
    return this.http.get<Produdoro>('${this.apiUrl}/${id}/foco');
  }

  mudaStatusParaPausaCurta(id: number){
    return this.http.get<Produdoro>('${this.apiUrl}/${id}/pausaCurta');
  }

  mudaStatusParaPausaLonga(id: number){
    return this.http.get<Produdoro>('${this.apiUrl}/${id}/pausaLonga');
  }

}
