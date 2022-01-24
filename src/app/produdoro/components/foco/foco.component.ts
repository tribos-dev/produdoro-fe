import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';

import { CountdownComponent, CountdownConfig, CountdownEvent} from 'ngx-countdown';
import { __classPrivateFieldSet } from 'tslib';
import { ProdudoroService } from '../../service/produdoro.service';





@Component({
  selector: 'app-foco',
  templateUrl: './foco.component.html',
  styleUrls: ['./foco.component.css']
})

export class FocoComponent implements OnInit {

  @ViewChild('cd', { static: false })
  private countdown!: CountdownComponent;


  public botaoInvisivel = false;

  constructor(private produdoroService: ProdudoroService, private router:Router){}


  ngOnInit(): void {}

  /*produdoro: Produdoro[] = [];*/
  pause: boolean = true;

  config: CountdownConfig = {
    leftTime: 3,
    format: 'mm:ss',
    demand: true,
  };
  notify = '';
  contadorFoco = 0;

  iniciaCronometro(){
    this.config;
    this.countdown.begin();
    this.pause = !this.pause;
  }

  pausaCronometro(){
    this.config;
    this.countdown.pause()
    this.pause = !this.pause;
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

  handleEvent(e: CountdownEvent) {
     console.log('Notify', e);
    if ( e.action === "done") {
      this.contadorFoco++;
      this.produdoroService.showMessage("Your time is over !");
      this.router.navigate(['/pausa-curta]']);
    }
  }
}

