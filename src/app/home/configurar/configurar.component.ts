import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configurar',
  templateUrl: './configurar.component.html',
  styleUrls: ['./configurar.component.css']
})
export class ConfigurarComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  fechar(){
    this.router.navigate(["/home"]);
  }
}
