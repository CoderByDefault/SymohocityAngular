import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalenderRoutingModule } from "./calender.routing.module";
import { CalenderComponent } from './calender/calender.component';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ButtonModule } from 'primeng/primeng';

@NgModule({
  declarations: [CalenderComponent],
  imports: [
    CommonModule,
    CalenderRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FullCalendarModule,
    ButtonModule
  ],
  exports: [
    CommonModule,
    CalenderRoutingModule,
    FormsModule,
    FullCalendarModule,
    ButtonModule
  ]
})
export class CalenderModule { }

