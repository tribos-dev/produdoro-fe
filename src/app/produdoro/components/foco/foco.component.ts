import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';

import { CountdownComponent, CountdownConfig, CountdownEvent} from 'ngx-countdown';
import { __classPrivateFieldSet } from 'tslib';
import { ProdudoroService } from '../../service/produdoro.service';
import { SessaoService } from '../../service/sessao.service';
import { SessionSetting } from '../../service/setting.enum';



@Component({
  selector: 'app-foco',
  templateUrl: './foco.component.html',
  styleUrls: ['./foco.component.css']
})

export class FocoComponent implements OnInit {

  @ViewChild('cd', { static: false })
  private countdown!: CountdownComponent;

  constructor(
    private produdoroService: ProdudoroService,
    private router:Router,
    private sessao : SessaoService){}


  ngOnInit(): void {}

  /*produdoro: Produdoro[] = [];*/

  config: CountdownConfig = {
    leftTime: 1500,
    format: 'mm:ss',
    demand: true,
  };
  notify = '';
  pausa: boolean = true;

  iniciaCronometro(){
    this.tocaInicioProdudoro();
    this.config;
    this.countdown.begin();
    this.pausa = !this.pausa;
  }

  pausaCronometro(){
    this.tocaInicioProdudoro();
    this.config;
    this.countdown.pause()
    this.pausa = !this.pausa;
  }

  avancaStatus(){
    const resultado = confirm("Tem certeza de que deseja terminar a rodada mais cedo? (O tempo restante não será contado no relatório.)");
    if (resultado){
      this.produdoroService.incrementaContadorPomodoro();
      const numPomodoros = this.sessao.get(SessionSetting.NumeroDePomodoros, 0);
      console.log(numPomodoros)
      if(numPomodoros % 4 === 0){
        this.router.navigate(["/pausa-longa"]);
      } else {
          this.router.navigate(["/pausa-curta"]);
        }
    } else {
      this.countdown.resume();
    }
  }

  tocaInicioProdudoro(){
    let som = new Audio();
    som.src = "../../../../../assets/sons/inicioFoco.mp3";
    som.load();
    som.play();
  }

  tocaSomProdudoro(){
    let som = new Audio();
    som.src = "../../../../../assets/sons/fimFoco.mp3";
    som.load();
    som.play();
  }

  handleEvent(e: CountdownEvent) {
     console.log('Notify', e);
    if ( e.action === "done") {
      this.tocaSomProdudoro();
      this.produdoroService.incrementaContadorPomodoro();
      const numPomodoros = this.sessao.get(SessionSetting.NumeroDePomodoros, 0);
      console.log(numPomodoros)
      if(numPomodoros % 4 === 0){
        this.produdoroService.showMessage("Hora do descanso !");
        this.router.navigate(["/pausa-longa"]);
      } else {
        this.produdoroService.showMessage("Hora do descanso !");
        this.router.navigate(["/pausa-curta"]);
      }
    }
  }
}


