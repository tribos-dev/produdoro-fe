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
    this.produdoroService.limpaContadorPomodoro();
    this.router.navigate(["/foco"]);
  }

  handleEvent(e: CountdownEvent) {
    console.log('Notify', e);
   if ( e.action === "done") {
    this.produdoroService.limpaContadorPomodoro();
    this.produdoroService.showMessage("Your time is over !");
    this.router.navigate(["/foco"]);  
    }
  }
}
