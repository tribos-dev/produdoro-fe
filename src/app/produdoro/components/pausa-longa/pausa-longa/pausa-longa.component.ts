import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CountdownComponent, CountdownConfig } from 'ngx-countdown';
import { ProdudoroService } from 'src/app/produdoro/service/produdoro.service';

@Component({
  selector: 'app-pausa-longa',
  templateUrl: './pausa-longa.component.html',
  styleUrls: ['./pausa-longa.component.css']
})
export class PausaLongaComponent implements OnInit {

  @ViewChild('cd', { static: false })
  private countdown!: CountdownComponent;

  constructor(private produdoroService: ProdudoroService, private router: Router) {}
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
