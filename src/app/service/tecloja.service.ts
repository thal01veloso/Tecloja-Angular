import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mercadoria } from '../Entity/mercadoria';

@Injectable({
  providedIn: 'root'
})
export class TeclojaService {

  constructor(private http: HttpClient) { }

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

}
