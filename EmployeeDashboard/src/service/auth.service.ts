import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl="http://localhost:5000/api/users"

  constructor(private _http:HttpClient) 
  {

  }

  loginUser(data:any):Observable<any>{
    return this._http.post<any>(`${this.apiUrl}/login`,data);
  }

 


}
