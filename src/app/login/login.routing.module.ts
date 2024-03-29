import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";

// unittesting  ()=> TodoModule;
// prod/dev "./todo/todo.module#TodoModule"

export const routes: Routes = [
  {path:'',component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }