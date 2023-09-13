import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}
usuario!: string;
senha!: string;
  ngOnInit(): void {}

  // Função para lidar com o clique no botão de login
  fazerLogin(): void {
    console.log('Usuário: ', this.usuario);
    console.log('Senha: ', this.senha);
    // Aqui você pode realizar a lógica de autenticação
  }
  putDataBase(){

  }
  redirect(): void{
      this.router.navigate(['new'], {relativeTo: this.route});
  }


}
