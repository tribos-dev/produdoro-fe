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
<<<<<<< HEAD


  public botaoInvisivel = false;

  constructor(private produdoroService: ProdudoroService, private router:Router){}
=======
 
  constructor(
    private produdoroService: ProdudoroService,
    private router: Router,
    private sessao: SessaoService){}
>>>>>>> c25e711b7d07afd6fdef630f487a72e9a28e6159


  ngOnInit(): void {}

  /*produdoro: Produdoro[] = [];*/
  pausa: boolean = true;

  config: CountdownConfig = {
    leftTime: 1500,
    format: 'mm:ss',
    demand: true,
  };
  notify = '';
  contadorFoco = 0;

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
    this.produdoroService.incrementaContadorPomodoro();
    const numPomodoros = this.sessao.get(SessionSetting.NumeroDePomodoros, 0);
    console.log(numPomodoros)
    if(numPomodoros % 4 === 0){
      this.router.navigate(["/pausa-longa"]);
    } else {
<<<<<<< HEAD
      this.produdoroService.showMessage("Pausa Curta");
      this.router.navigate(['/pausa-curta]']);
    }

=======
        this.router.navigate(["/pausa-curta"]);
      }
>>>>>>> c25e711b7d07afd6fdef630f487a72e9a28e6159
  }

  handleEvent(e: CountdownEvent) {
     console.log('Notify', e);
    if ( e.action === "done") {
      this.produdoroService.incrementaContadorPomodoro();
      const numPomodoros = this.sessao.get(SessionSetting.NumeroDePomodoros, 0);
      console.log(numPomodoros)
      if(numPomodoros % 4 === 0){
        this.produdoroService.showMessage("Your time is over !");
        this.router.navigate(["/pausa-longa"]);
      } else {
        this.produdoroService.showMessage("Your time is over !");
        this.router.navigate(["/pausa-curta"]);
      }
    }
  }
}


