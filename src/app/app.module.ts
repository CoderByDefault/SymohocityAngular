import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwtModule } from '@auth0/angular-jwt';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './helpers/modules/material.module';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { TOKEN_IDENT } from './login/loginservices/authlogin.service';
import { BASE_PATH, AUTH } from './api/variables';
/**
 * Starting Point Module
 * 
 */
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: jwtGetter,
        whitelistedDomains: [`${BASE_PATH}`],
        blacklistedRoutes: [`${BASE_PATH}${AUTH}`],
      }
    }),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    FullCalendarModule
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FullCalendarModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function jwtGetter() {
  return localStorage.getItem(TOKEN_IDENT);
}