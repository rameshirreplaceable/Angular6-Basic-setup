import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiConstantService {
  protocol: string = '';
  apiUrl: string = '';
  version: string = '';

  constructor() {
    this.protocol = environment.protocol;
    this.version = environment.version;
    this.apiUrl = environment.apiUrl;
  }

  // login Verify
    loginverify:string = 'assets/json/loginVerify.json';

  /**
   * return respective url based on paramenter
   * @param url resquesting api url
   */
    getUrl(url:string){
      if(url == 'loginVerify'){
        return this.protocol+this.apiUrl+this.loginverify;
      }
    }

}
