import { throwError as observableThrowError, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ConfigService } from '../config.service';

@Injectable()
export abstract class DataService {
  apiUrl = '';
  hostedUrl = '';

  protected constructor(
    public http: HttpClient,
    public router: Router,
    public configService: ConfigService
  ) {
    this.apiUrl = configService.getApiUri();
    this.hostedUrl = configService.getBaseUri();
  }

  private getHeaders() {
    const headers = new HttpHeaders();
    //headers.append('Accept', 'application/json');
    headers.append('responseType', 'text');
    return headers;
  }
   

  private handleError(result: any) {
    console.log(result);
    const applicationError = result.headers.get('Application-Error');
    return observableThrowError(applicationError || 'Server error');
  }

  get(name: string, url = this.apiUrl, showLoader = true, isApiIntegration = false): Observable<any> {
    url = this.apiUrl + name;
    
    return this.http.get(url, { responseType: 'text' }).pipe(
      map((res: any) => {
        return res;
      }),
      catchError(res => {
        return this.handleError(res);
      })
    );
  }

}
