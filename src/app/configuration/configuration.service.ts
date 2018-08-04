import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

    constructor() { }
    
    /**
     * Setting common header for http call's
     */
        public getHeaders() {
            let headers = new HttpHeaders({
            'Accept': 'application/json',   
            'Authorization': 'my-auth-token'
            })
            return headers;
        }

    /**
     * Handling External Error coming from network like 404, 500
     * @param error 
     */
        public handleError( error: HttpErrorResponse){
            let errorMsg:string;
            console.log(error);
            if(error.status == 404){
                errorMsg = "Server error or bad request";
            }
            else  if(error.status == 500){
                errorMsg = "Server error";
            }else{
                errorMsg = "Error occured in API server. Please try after sometime." ;
            }
            console.log("error occured in the API : "+error.url);
            return throwError(errorMsg);
        }


}
