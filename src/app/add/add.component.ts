import { Component, OnInit } from '@angular/core';
import { InjectableService } from '../injectable.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  jsonData:any;
  head;
  
  constructor(private common:InjectableService) { }

  ngOnInit() {
    this.common.setData();
  }
  clickFunction():void
  {
    this.jsonData=this.common.getData();
    this.head=Object.keys(this.jsonData[0]);
  }
  sort()
  {
    
  }



}
