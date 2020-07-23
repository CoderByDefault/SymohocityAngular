import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationService } from './services/location.service';
import { AddlocationComponent } from './addlocation/addlocation.component';
import { NgbdModalBasic } from 'src/app/helpers/components/modal-basic';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MapComponent } from './map/map.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MaterialModule } from '../helpers/modules/material.module';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';

@NgModule({
  declarations: [
    AddlocationComponent,
    NgbdModalBasic,
    DashboardComponent,
    MapComponent,
    SidebarComponent,
    DeleteModalComponent,
    EditModalComponent

  ],
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    DashboardRoutingModule,
    MaterialModule
  ],
  providers: [LocationService],
  entryComponents: [DeleteModalComponent, EditModalComponent, AddlocationComponent],
})
export class DashboardModule { }
