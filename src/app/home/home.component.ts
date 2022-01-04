import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigurarComponent } from '../configurar/configurar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  config(){
    this.router.navigate(["home", "configurar"]);
  }

  login(){
    this.router.navigate(["home", "login"])
  }
}
