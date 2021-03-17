import { AuthService } from './../login/auth.service';
import { Usuario } from './../Entity/usuario';
import { Mercadoria } from './../Entity/mercadoria';
import { Component, OnInit } from '@angular/core';
import { TeclojaService } from '../service/tecloja.service';

@Component({
  templateUrl: './tecloja.component.html',
  styleUrls: ['./tecloja.component.css']
})
export class TeclojaComponent implements OnInit {
  produtos: Array<any> = new Array();
  mercadoria: Mercadoria=new Mercadoria;


  constructor(private teclojaService:TeclojaService) { }

  ngOnInit(): void {
    console.log("Chegou aqui")
    this.listarProdutos();
  }

  listarProdutos(){
    this.teclojaService.listarTodos().subscribe(produtos=>{
      this.produtos=produtos
    }, err=>{
      console.log("erro ao listar produtos",err)
    })
  }
  cadastrarMercadoria(){
    this.teclojaService.cadastrar(this.mercadoria).subscribe(mercadoria=>{
      this.mercadoria= new Mercadoria();
      this.listarProdutos();
    },err=>{console.log("Erro no cadastro",err)})
  }

  deletarMercadoria(id:number){
    this.teclojaService.deletar(id).subscribe(mercadoria=>{
      this.mercadoria = new Mercadoria();
      this.listarProdutos();
    },err=>{
      console.log("Erro ao deletar protudo !!!",err)
    })
  }
  alterarMercadoria(id:number){
    this.teclojaService.alterar(id,this.mercadoria).subscribe(mercadoria=>{
      this.mercadoria = new Mercadoria();
      this.listarProdutos();
    }, err=>{
      console.log("Erro na alteração da mercadoria",err)
    })
  }
  fazerLogout(){
    this.teclojaService.logout();

  }

}
