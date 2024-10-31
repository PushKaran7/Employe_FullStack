import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl='http://localhost:5000/api/employeeItems/';

  constructor(private _http:HttpClient) {

   }

   getEmployee():Observable<any>{
    console.log("I am in service");
    return this._http.get<any>(this.baseUrl);
   }

   addEmployee(data:any):Observable<any>{
    return this._http.post<any>(this.baseUrl,data);
   }

   updateEmployee(id:string,data:any):Observable<any>{
    return this._http.put<any>(`${this.baseUrl}/${id}`,data);
   }

   deleteEmployee(id:string):Observable<any>{
    return this._http.delete<any>(`${this.baseUrl}/${id}`);
   }


}
