import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
  @Component({
  selector: 'app-list',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class AppComponent1 implements OnInit {
  li:any;
  lis=[];
   myname = 'Gowtham';
  myInputMessage:string ="I am the parent comppnent"  

  constructor(private http : HttpClient, private router: Router){

   } 
   btnClick(): void {
     this.router.navigate(['part2']);
  }
   ngOnInit(): void {
    this.http.get('https://api.spacexdata.com/v3/launches')
    .subscribe(Response => {
  
      // If response comes hideloader() function is called
      // to hide that loader 
      if(Response){  
        hideloader();
      }
      console.log(Response)
      this.li=Response;
      // this.lis=this.li.list;
    });
    function hideloader(){
      document.getElementById('loading').style.display = 'none';}

     
  
 

  }

}