import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Mercadoria } from '../Entity/mercadoria';
import { Usuario } from '../Entity/usuario';

@Injectable({
  providedIn: 'root'
})
export class TeclojaService {

  constructor(private http: HttpClient, private router:Router) { }

  listarTodos():Observable<any>{
    return this.http.get("http://localhost:3000/mercadoria");
  }

  cadastrar(mercadoria:Mercadoria): Observable<any>{
    return this.http.post("http://localhost:3000/mercadoria",mercadoria);
  }
  deletar(id:any): Observable<any>{
    return this.http.delete("http://localhost:3000/mercadoria/".concat(id));
  }
  alterar(id:any,mercadoria:Mercadoria): Observable<any>{
    return this.http.put("http://localhost:3000/mercadoria/".concat(id),mercadoria);
  }
  public logout(){
    localStorage.removeItem("USER_INFO");
    this.router.navigate(["/"]);
  }

}
