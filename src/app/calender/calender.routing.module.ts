import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalenderComponent } from "./calender/calender.component";

// unittesting  ()=> TodoModule;
// prod/dev "./todo/todo.module#TodoModule"

export const routes: Routes = [
  {path:'',component: CalenderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalenderRoutingModule { }