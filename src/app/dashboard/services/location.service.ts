import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private _url: string = "https://127.0.0.1:5001/api";

  constructor(private httpClient: HttpClient) {
  }

  /* Method to GET all the locations */
  getLocations() {
    return this.httpClient.get("../assets/data/config.json");
  }

  /* Method to automatically authenticate users with already set Username and Password */
  getAuthenticated(username: string, password: string) {
    return this.httpClient.post<any>('https://127.0.0.1:5001/api/auth/login', { username, password })
      .pipe(map(user => {
        return user;
      }));
  }
   /* Method to GET all the controllers */  
  getControllers(token: string, ipAddress: string) {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', "Bearer " + token)
    }
    return this.httpClient.get("https://" + ipAddress + ":5001/api" + "/controllers", header);
  }
   /* Method to GET all the sequences */  
  getSequences(token: string, ipAddress: string) {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', "Bearer " + token)
    }
    return this.httpClient.get("https://" + ipAddress + ":5001/api" + "/sequences", header);
  }
}