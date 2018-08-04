import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
              private router: Router,
              private commonSer: CommonServiceService) { }

  ngOnInit() {
    this.loginVerify();
  }

  /**
   * LoginVeify to verify user based Username and Password
   */
    loginVerify(){
      this.commonSer.loginVerify().subscribe(
          response =>{
            console.log(response);
            if(response.status == 'success'){
              localStorage.setItem('User', response.payload.length? (response.payload[0].token): '');
              this.route.queryParams.subscribe(params =>{
                this.router.navigateByUrl(params.url);
              })  
            }
            
          },
          error=>{
            console.log(error);
          },
          ()=>{
            console.log("Losgin  Completed");
          }
      )
    }



}
