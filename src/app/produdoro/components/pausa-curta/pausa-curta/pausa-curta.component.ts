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
    leftTime: 5,
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

  avancaStatus(){
    const numPomodoros = this.sessao.get(SessionSetting.NumeroDePomodoros, 0);
    console.log(numPomodoros)
    if(numPomodoros % 4 === 0){
      this.router.navigate(["/pausa-longa"]);
    } else{
      this.router.navigate(["/foco"]);
    }
  }
  

  handleEvent(e: CountdownEvent) {
    console.log('Notify', e);
   if ( e.action === "done") {
     const numPomodoros = this.sessao.get(SessionSetting.NumeroDePomodoros, 0);
     console.log(numPomodoros)
     if(numPomodoros < 4 ){
       this.produdoroService.showMessage("Your time is over !");
       this.router.navigate(["/foco"]);
      }
    }
  }
}
