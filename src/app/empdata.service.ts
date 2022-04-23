import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmpdataService {
  constructor(private http: HttpClient) {}

  getEmployeeData(){
    return this.http.get("https://api.onlinewebtutorblog.com/employees")
  }
  addEmployeeData(){
    return this.http.post("https://api.onlinewebtutorblog.com/employees",{})
  }
  updateEmployeeData(){
    return this.http.patch("https://api.onlinewebtutorblog.com/employees",{})
  }
  deleteEmployeeData(){
    return this.http.delete("https://api.onlinewebtutorblog.com/employees")
  }


}
