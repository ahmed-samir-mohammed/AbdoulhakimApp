
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResponseData } from '../models/ResponseData';


@Injectable({
    providedIn: 'root',
  })
export class UserService {
  constructor(private _httpClient: HttpClient) { }
  authenticate(AuthenticateRequest: any):Observable<any>{
   
    return this._httpClient.post<any>(environment.apiUrl + "/User/login", AuthenticateRequest);
  } 


  
  register(User: any):Observable<ResponseData>{
   
    return this._httpClient.post<any>(environment.apiUrl + "/User/CreateUpdateUser", User);
  } 
   

  createUpdate(User: any):Observable<ResponseData>{
    return this._httpClient.post<any>(environment.apiUrl + "/User/CreateUpdate", User);
  } 

  getAll(filter):Observable<ResponseData>{
    return this._httpClient.post<any>(environment.apiUrl + "/User/GetAll",filter);
  } 

  getById(id:any):Observable<any>{
    let params = new HttpParams();
    params = params.append('id', id);
    return this._httpClient.get<any>(environment.apiUrl + "/User/GetById", { params: params});
  } 

  delete(id: any):Observable<any>{
    let params = new HttpParams();
    params = params.append('id', id);
    return this._httpClient.get<any>(environment.apiUrl + "/User/Delete", { params: params});
  } 

 
 
}
