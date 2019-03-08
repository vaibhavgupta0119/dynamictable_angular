import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class InjectableService {

  constructor() { }

arr=[ 
  {
      "F_name":"Vaibhav",
      "L_Name":"Gupta",
      "EMAIL":"vaibhav@gmail.com",
      "E_ID":6198,
      "MOBILE_NUMBER":7717497388,
      "DESIGNATION":"Software Engineer",
      "DOB":"19/01/1996"
  },
  {
      "F_name":"Money",
      "L_Name":"Jain",
      "EMAIL":"money@gmail.com",
      "E_ID":6189,
      "MOBILE_NUMBER":9814568228,
      "DESIGNATION":"Software Engineer",
      "DOB":"14/10/1997"
  },
  {
      "F_name":"Mayank",
      "L_Name":"Omar",
      "EMAIL":"mayank@gmail.com",
      "E_ID":6187,
      "MOBILE_NUMBER":96889856373,
      "DESIGNATION":"Software Engineer",
      "DOB":"18/02/1996"
  }
];

myArr;
setData()
{
  this.myArr=this.arr;
}
getData()
{
  return this.myArr;
}
}
