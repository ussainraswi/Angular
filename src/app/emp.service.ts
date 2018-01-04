import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmpService {
  employees=[];
  constructor(private _http:Http) { }
  checkMe:any;
  getEmployees(){
    return this._http.get("http://localhost:81/api/select.php/")
      .map(res=>{
        this.checkMe = res;
       
        if(this.checkMe._body !== "0"){
           return res.json()
        }
       
      });
  }
  addEmployee(info){
    return this._http.post("http://localhost:81/api/insert.php",info)
      .map(()=>"");
  }
  getEmployee(id){
    return this._http.post("http://localhost:81/api/selectone.php/",{'id':id})
      .map(res=>res.json());
  }

  login(username, password){
    return this._http.post("http://localhost:81/api/select_user.php/",{'username':username, 'password':password})
      .map(res => res.json());
  }

  deleteEmployee(id){
    return this._http.post("http://localhost:81/api/delete.php/",{'id':id})
      .map(()=>this.getEmployees());
  }
  updateEmployee(info){
    return this._http.post("http://localhost:81/api/update.php/", info)
      .map(()=>"");
  }
}
