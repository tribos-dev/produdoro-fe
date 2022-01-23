import { ProdudoroService } from './../../../service/produdoro.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CountdownComponent, CountdownConfig } from 'ngx-countdown';
import { Router } from '@angular/router';
import { __classPrivateFieldSet } from 'tslib';

@Component({
  selector: 'app-pausa-curta',
  templateUrl: './pausa-curta.component.html',
  styleUrls: ['./pausa-curta.component.css']
})
export class PausaCurtaComponent implements OnInit {

  @ViewChild('cd', { static: false })
  private countdown!: CountdownComponent;

  constructor(private produdoroService: ProdudoroService, private router:Router) {}
  ngOnInit(): void {}

  config: CountdownConfig = {
    leftTime: 300,
    format: 'mm:ss',
    demand: true,
  };
  notify = '';
  contadorFoco = 0;

  pausa: boolean = true;

  iniciaCronometro(){
    this.config;
    this.countdown.begin();
    this.pausa = !this.pausa;
  }

  pausaCronometro(){
    this.config;
    this.countdown.pause()
    this.pausa = !this.pausa;
  }

  avanca(){
    this.contadorFoco++
    if(this.contadorFoco % 4 === 0){
      this.produdoroService.showMessage("Pausa Longa");
    } else {
      this.produdoroService.showMessage("Pausa Curta");
      this.router.navigate(['/pausa-curta]']);
    }

  }
}
