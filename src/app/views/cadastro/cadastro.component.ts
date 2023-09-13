import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  nome!: string;
idade!: string;
email!: string;
usuario!: string;
senha!: string;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  // Função para lidar com o clique no botão de login
  fazerCadastro(): void {
    console.log('Nome: ', this.nome);
    console.log('Senha: ', this.idade);
    console.log('email: ', this.email);
    console.log('Users: ', this.usuario);
    console.log('Senha: ', this.senha);
    // Aqui você pode realizar a lógica de cadastramento
  }
  putDataBase(){

  }
  redirect(): void{
      this.router.navigate(['new'], {relativeTo: this.route});
  }


}
