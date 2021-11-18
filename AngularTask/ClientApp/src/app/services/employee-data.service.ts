import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from './abstract/data.service';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';


@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService extends DataService {
  constructor(
    public http: HttpClient,
    public router: Router,
    public configService: ConfigService
  ) {
    super(http, router, configService);
  }

  getEmployeeName(employeeName: string): Observable<string> {
    return this.get(`Employee/EmployeeName?name=${employeeName}`);
    }
  }
