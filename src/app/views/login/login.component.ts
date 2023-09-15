import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario!: string ; // Iniciaslize as propriedades
  senha!: string ;
  @ViewChild('menuButton')
  menuButton!: MatMenuTrigger;

  constructor(private router: Router, private route: ActivatedRoute, private sharedService: SharedService) {}
  ngOnInit(): void {}

  // Função para lidar com o clique no botão de login
  fazerLogin(): void {
    console.log('Usuário: ', this.usuario);
    console.log('Senha: ', this.senha);
    // Aqui você pode realizar a lógica de autenticação
  }
  putDataBase(){

  }
  toggleMenu():void{
    this.menuButton.openMenu(); // Abre o menu ao clicar no ícone do menu
  }
  redirectHome(){
    this.sharedService.redirectHome();
  }
  redirect(): void{
      this.router.navigate(['cadastro'], {relativeTo: this.route});
  }
}
