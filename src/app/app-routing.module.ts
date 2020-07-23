import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// unittesting  ()=> TodoModule;
// prod/dev "./todo/todo.module#TodoModule"

export const routes: Routes = [
  {path:'',loadChildren:  "./dashboard/dashboard.module#DashboardModule"},
  {path:'login',loadChildren:"./login/login.module#LoginModule"},
  {path:'calender',loadChildren:"./calender/calender.module#CalenderModule"},
  {path:'**',redirectTo:'/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }