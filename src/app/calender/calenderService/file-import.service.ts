import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FileImportService {
  private _url: string = "https://127.0.0.1:5000/api/medialibrary/video/import";

  constructor(private http: HttpClient) { }


  import(token: string, formData) {
    console.log("new",formData );
    var mode: "cors"; // no-cors, cors, *same-origin
    var cache: "no-cache"; // *default, no-cache, reload, force-cache, only-if-cached
    var credentials: "omit"; // include, same-origin, *omit 
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', "Bearer " + token)
    }
    console.log("headers", header );
    return this.http.post<any>(`${this._url, header}`, formData, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      map(event => { return this.getEventMessage(event, formData)})
      
    );
  }
  
  private getEventMessage(event: HttpEvent<any>, formData) {

    switch (event.type) {
      case HttpEventType.UploadProgress:
        //return this.fileUploadProgress(event);
        break;
      case HttpEventType.Response:
        return this.apiResponse(event);
        break;
      default:
        return `File "${formData.get('profile').name}" surprising upload event: ${event.type}.`;
    }
  }

  /*private fileUploadProgress(event) {
    const percentDone = Math.round(100 * event.loaded / event.total);
    return { status: 'progress', message: percentDone };
  }*/

  private apiResponse(event) {
    return event.body;
  }


}
