
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResponseData } from '../models/ResponseData';


@Injectable({
    providedIn: 'root',
  })
export class CategoryService {
  constructor(private _httpClient: HttpClient) { }
 

  createUpdate(Category: any):Observable<ResponseData>{
    return this._httpClient.post<any>(environment.apiUrl + "/Category/CreateUpdate", Category);
  } 

  getAll(filter):Observable<ResponseData>{
    return this._httpClient.post<any>(environment.apiUrl + "/Category/GetAll",filter);
  } 

  getById(id:any):Observable<any>{
    let params = new HttpParams();
    params = params.append('id', id);
    return this._httpClient.get<any>(environment.apiUrl + "/Category/GetById", { params: params});
  } 

  delete(id: any):Observable<any>{
    let params = new HttpParams();
    params = params.append('id', id);
    return this._httpClient.get<any>(environment.apiUrl + "/Category/Delete", { params: params});
  } 

  getAllByCategoryId(filter:any):Observable<any>{
    return this._httpClient.post<any>(environment.apiUrl + "/Category/GetAllByCategoryId",filter);
  }
 
}
