import { NgModule } from '@angular/core';
import { TeclojaComponent } from './tecloja.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: TeclojaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeclojaRoutingModule {}
