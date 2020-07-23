import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Configuration } from '../configuration';
import {
  BASE_PATH,
  AUTH
} from '../variables' 

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  protected basePath = '';
  public defaultHeaders = new HttpHeaders();
  public configuration = new Configuration();

  

  constructor(protected httpClient: HttpClient,
    @Optional() @Inject(BASE_PATH) basePath: string,
    @Optional() configuration: Configuration) { 
      if (basePath) {
        this.basePath = basePath;
      }
      if (configuration) {
        this.configuration = configuration;
        this.basePath = basePath || configuration.basePath || this.basePath;
      }
    }

    public credentials(username: string, password: string) {
      let headers = this.defaultHeaders;
      const httpHeaderAccepts: string[] = [
        'application/json'
      ];
  
      const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
      if (httpHeaderAcceptSelected !== undefined) {
        headers = headers.set('Accept', httpHeaderAcceptSelected);
      }
  
      return this.httpClient.post<any>(`${this.basePath}${AUTH}`, {
        username: username,
        password: password
      },
        {
          withCredentials: this.configuration.withCredentials,
          headers: headers,
        }
      );
    }
}
