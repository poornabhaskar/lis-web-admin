import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppConstants } from 'src/common/app.constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  databaseStatus=false

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getDashboardData().subscribe((data)=>{
      console.log("Server API Data:-- "+ JSON.stringify( data)); 
      if(data.databaseStatus=="Y"){
        this.databaseStatus=true
      }

    }) 
    
  }
  getDashboardData(): Observable<any> {
    const url = AppConstants.appServerURL+"/api/v1/";
    return this.http.get(url).pipe(map((response:any) => response));
  }

}
