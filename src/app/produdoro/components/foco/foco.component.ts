import { Component, OnInit, ViewChild} from '@angular/core';

import { CountdownComponent, CountdownConfig, CountdownEvent} from 'ngx-countdown';
import { __classPrivateFieldSet } from 'tslib';
import { Produdoro } from '../../interface/produdoro';
import { ProdudoroService } from '../../service/produdoro.service';




@Component({
  selector: 'app-foco',
  templateUrl: './foco.component.html',
  styleUrls: ['./foco.component.css']
})

export class FocoComponent implements OnInit {

  @ViewChild('cd', { static: false })
  private countdown!: CountdownComponent;
 
  constructor(private produdoroService: ProdudoroService){}

  ngOnInit(): void {}

  /*produdoro: Produdoro[] = [];*/
  pause: boolean = true;

  config: CountdownConfig = {
    leftTime: 3,
    format: 'mm:ss',
    demand: true,
  };
  notify = '';

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
    this.produdoroService.showMessage("Your time is over !");
  }

  handleEvent(e: CountdownEvent) {
     console.log('Notify', e);
    if ( e.action === "done") {
      this.produdoroService.showMessage("Your time is over !");
    }
  }
}

