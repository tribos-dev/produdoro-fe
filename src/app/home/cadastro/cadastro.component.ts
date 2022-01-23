import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Produdoro } from '../interface/produdoro';
import { SignupService } from './service/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(
    private router:Router,
    private formBuilder: FormBuilder,
    private router: Router,
    private stepService: StepIndicatorService,
    private cadastroService: SignupService
  ) { }

  produdoroForm: FormGroup;
  partialProdudoro: Produdoro;

  ngOnInit(): void {

    if(this.cadastroService.hasJornadaClareza()) {
      this.partialProdudoro = this.cadastroService.getJornadaClareza();
    }
    this.cadastroService = this.formBuilder.group({
      email: [this.verifyIfTypesafe(this.partialProdudoro.email),
        [
          Validators.required,
          Validators.minLength(5)
        ]
      ],
      senha: [this.verifyIfTypesafe(this.partialProdudoro.senha),
        [
          Validators.required,
          Validators.minLength(5)
        ]
      ],
    });
  }

  fechar(){
    this.router.navigate(["/home"]);
  }
}
