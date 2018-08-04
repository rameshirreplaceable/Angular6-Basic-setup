import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { NavigationExtras, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private route: Router) { }

  /**
   * Implementing canActive based on user token 
   * @param route used for navigation
   * @param state used to get current url
   */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(localStorage.getItem('User')){
          return true;
          
        }
        else{
          let navigationExtras: NavigationExtras = {
            queryParams: { 'url': state.url },
            // fragment: 'anchor'
          };
          this.route.navigate(['/login'], navigationExtras);
          return false;
        }
    }

}
