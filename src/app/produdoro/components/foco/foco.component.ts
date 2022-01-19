import { Component, OnInit, ViewChild} from '@angular/core';
import { CountdownComponent, CountdownConfig} from 'ngx-countdown';
import { __classPrivateFieldSet } from 'tslib';



@Component({
  selector: 'app-foco',
  templateUrl: './foco.component.html',
  styleUrls: ['./foco.component.css']
})

export class FocoComponent implements OnInit {

  @ViewChild('cd', { static: false })
  private countdown!: CountdownComponent;
 
  constructor(){}

  config: CountdownConfig = {
    leftTime: 1500,
    format: 'mm:ss',
    demand: true,
  };
  
  pause: boolean = true;
  
  
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
  ngOnInit(){
  
  }

}
