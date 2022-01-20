import { Component, OnInit, ViewChild } from '@angular/core';
import { CountdownComponent, CountdownConfig } from 'ngx-countdown';

@Component({
  selector: 'app-pausa-longa',
  templateUrl: './pausa-longa.component.html',
  styleUrls: ['./pausa-longa.component.css']
})
export class PausaLongaComponent implements OnInit {

  @ViewChild('cd', { static: false })
  private countdown!: CountdownComponent;

  constructor() { }

  config: CountdownConfig = {
    leftTime: 900,
    format: 'mm:ss',
    demand: true,
  };
  
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

  ngOnInit(): void {
  }

}
