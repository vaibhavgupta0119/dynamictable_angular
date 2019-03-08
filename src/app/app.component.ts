import { Component, OnInit } from '@angular/core';
import {InjectableService} from './injectable.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


value:any;

json1={
  F_name:"",
  L_Name:"",
  EMAIL:"",
  E_ID: "",
  MOBILE_NUMBER:"",
  DESIGNATION:"",
  DOB:""
};


 
  constructor(private common :InjectableService){}
  ngOnInit()
  {
   
    
  }
  addFunction()
  {
    
    this.value=this.common.getData();
    this.value.push(this.json1);
    console.log(this.value); 
    }
    
}


