import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceResponsive } from '../interface/service-responsive';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { ConfigurationService } from '../configuration/configuration.service';
import { ApiConstantService } from '../configuration/api-constant.service';
@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private http: HttpClient,
              private config: ConfigurationService,
              private apiconst: ApiConstantService ) { }
  
  /**
   * Login Verify function
   */
    loginVerify():Observable<ServiceResponsive>{
      let url = this.apiconst.getUrl('loginVerify');
      console.log(url);
      return this.http.get<ServiceResponsive>(
        url, 
        // {'name':'ramesh'}, 
        {  headers: this.config.getHeaders() }
      ).pipe(
        retry(2), // it will try with that url 2 times 
        catchError(this.config.handleError)
      );
    }

}
