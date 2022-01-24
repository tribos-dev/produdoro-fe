import { Component, OnInit, ViewChild } from '@angular/core';

import { ProdudoroService } from './../../../service/produdoro.service';
import { CountdownComponent, CountdownConfig, CountdownEvent } from 'ngx-countdown';
import { Router } from '@angular/router';
import { __classPrivateFieldSet } from 'tslib';
import { SessaoService } from '../../../service/sessao.service';
import { SessionSetting } from '../../../service/setting.enum';

@Component({
  selector: 'app-pausa-curta',
  templateUrl: './pausa-curta.component.html',
  styleUrls: ['./pausa-curta.component.css']
})
export class PausaCurtaComponent implements OnInit {

  @ViewChild('cd', { static: false })
  private countdown!: CountdownComponent;

  constructor(
    private produdoroService: ProdudoroService,
    private router:Router,
    private sessao: SessaoService) {}

  ngOnInit(): void {}

  config: CountdownConfig = {
    leftTime: 3,
    format: 'mm:ss',
    demand: true,
  };
  notify = '';
  contadorFoco = 0;

  pausa: boolean = true;

  iniciaCronometro(){
    this.tocarInicioProdudoro();
    this.config;
    this.countdown.begin();
    this.pausa = !this.pausa;
  }

  pausaCronometro(){
    this.tocarInicioProdudoro();
    this.config;
    this.countdown.pause()
    this.pausa = !this.pausa;
  }

  avancaStatus(){
    const resultado = confirm("Tem certeza de que deseja terminar a rodada mais cedo? (O tempo restante não será contado no relatório.)");
    if (resultado){
      const numPomodoros = this.sessao.get(SessionSetting.NumeroDePomodoros, 0);
      console.log(numPomodoros)
      if(numPomodoros % 4 === 0){
        this.router.navigate(["/pausa-longa"]);
      } else{
        this.router.navigate(["/foco"]);
      }
    } else{
      this.countdown.resume();
    }
  }
  
  tocarInicioProdudoro(){
    let som = new Audio();
    som.src = "../../../../../assets/sons/inicioFoco.mp3";
    som.load();
    som.play();
  }

  tocarSomProdudoro(){
    let som = new Audio();
    som.src = "../../../../../assets/sons/fimFoco.mp3";
    som.load();
    som.play();
  }

  handleEvent(e: CountdownEvent) {
    console.log('Notify', e);
   if ( e.action === "done") {
     const numPomodoros = this.sessao.get(SessionSetting.NumeroDePomodoros, 0);
     console.log(numPomodoros)
     this.tocarSomProdudoro();
     if(numPomodoros < 4 ){
       this.produdoroService.showMessage("Sua pausa curta acabou !");
       this.router.navigate(["/foco"]);
      }
    }
  }
}
