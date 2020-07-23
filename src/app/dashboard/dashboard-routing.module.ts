import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGaurdService } from '../guards/auth-gaurd.service';

export const routes: Routes = [
  {path:'',component:  DashboardComponent/*, canActivate: [AuthGaurdService]*/},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }