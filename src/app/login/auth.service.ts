import { TeclojaComponent } from './../tecloja/tecloja.component';
import { Observable } from 'rxjs';
import { Usuario } from './../Entity/usuario';
import { Injectable } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  constructor(private router: Router) { }

 public login (usuario :Usuario) {
      if (usuario.userName==="usuario@gmail.com" && usuario.senha === "123456"){
      this.usuarioAutenticado = true;
      this.router.navigate(['home']);
      console.log("Logado com sucesso")
     } else {
      this.usuarioAutenticado=false;
      console.log("Erro")
  }
}


}

