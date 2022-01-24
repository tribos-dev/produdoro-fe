import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { CountdownComponent, CountdownConfig, CountdownEvent } from 'ngx-countdown';
import { ProdudoroService } from 'src/app/produdoro/service/produdoro.service';
import { SessaoService } from '../../../service/sessao.service';
import { SessionSetting } from '../../../service/setting.enum';


@Component({
  selector: 'app-pausa-longa',
  templateUrl: './pausa-longa.component.html',
  styleUrls: ['./pausa-longa.component.css']
})
export class PausaLongaComponent implements OnInit {

  @ViewChild('cd', { static: false })
  private countdown!: CountdownComponent;

  constructor(
    private produdoroService: ProdudoroService,
    private router: Router,
    private sessao: SessaoService) {}
  ngOnInit(): void {}

  config: CountdownConfig = {
    leftTime: 900,
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
      this.produdoroService.limpaContadorPomodoro();
      this.router.navigate(["/foco"]);
    } else {
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
    this.tocarSomProdudoro();
    this.produdoroService.limpaContadorPomodoro();
    this.produdoroService.showMessage("Sua pausa longa acabou !");
    this.router.navigate(["/foco"]);  
    }
  }
}
