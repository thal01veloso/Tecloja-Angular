import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeclojaService } from './service/tecloja.service';
import { TeclojaComponent } from './tecloja/tecloja.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { TeclojaModule } from './tecloja/tecloja.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TeclojaModule,


  ],
  providers: [TeclojaService,HttpClientModule,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
