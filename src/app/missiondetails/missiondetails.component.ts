import { Component, Input, OnInit,Output } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
       
    @Component({  
       selector: 'app-student',  
       templateUrl: './missiondetails.component.html',  
       styleUrls: ['./missiondetails.component.css']  
    })  
      
    export class StudentComponent implements OnInit {  
      mission:any;

      constructor(
        private route: ActivatedRoute,
        private http : HttpClient
      ) { }  
      
    ngOnInit() { 
      this.getMission(); 
        }  
      
    getMission(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.http.get('https://api.spacexdata.com/v3/launches')
      .subscribe(Response => {
        this.mission = Response[id]
      })
    }  
  }
