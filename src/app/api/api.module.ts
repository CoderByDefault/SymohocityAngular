import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {Configuration} from './configuration';
import { AuthloginService } from '../login/loginservices/authlogin.service';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';

import {ApiService} from './api/api.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, HttpClientModule, JwtModule 
  ],
  providers: [
    ApiService, AuthloginService, JwtHelperService]
})
export class ApiModule { }
