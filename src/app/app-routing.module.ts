import { LoginComponent } from './login/login.component';
import { TeclojaComponent } from './tecloja/tecloja.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:"login",component: LoginComponent},
  {
    path: 'home',
    loadChildren: () => import('./tecloja/tecloja.module').then((m) => m.TeclojaModule),
  },
  {path:"", redirectTo: "login",pathMatch:"full"},
  { path: '**', component:AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
