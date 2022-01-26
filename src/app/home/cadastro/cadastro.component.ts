import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { User } from 'src/app/compartilhado/service/user/user';
import { UserService } from 'src/app/compartilhado/service/user/user.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  user:User = new User();

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {}

  fechar(){
    this.router.navigate(["/home"]);
  }

  onSubmit() {
    this.userService.save(this.user)
  }
}
