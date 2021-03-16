import { TeclojaRoutingModule } from './tecloja-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TeclojaComponent } from './tecloja.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TeclojaComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    TeclojaRoutingModule,
  ],
  exports: [TeclojaComponent]
})
export class TeclojaModule {}
