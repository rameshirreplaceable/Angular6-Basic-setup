import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from './services/common-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Time Sheet';

  constructor(private commonSer: CommonServiceService){}

  ngOnInit() {
  }
  
  


}
