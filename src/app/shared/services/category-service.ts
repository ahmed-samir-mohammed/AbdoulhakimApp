
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
 

  createUpdate(CategorySite: any):Observable<ResponseData>{
    return this._httpClient.post<any>(environment.apiUrl + "/CategorySite/CreateUpdate", CategorySite);
  } 

  getAll(filter):Observable<ResponseData>{
    return this._httpClient.post<any>(environment.apiUrl + "/CategorySite/GetAll",filter);
  } 

  getById(id:any):Observable<any>{
    let params = new HttpParams();
    params = params.append('id', id);
    return this._httpClient.get<any>(environment.apiUrl + "/CategorySite/GetById", { params: params});
  } 

  delete(id: any):Observable<any>{
    let params = new HttpParams();
    params = params.append('id', id);
    return this._httpClient.get<any>(environment.apiUrl + "/CategorySite/Delete", { params: params});
  } 

  getAllByCategoryId(filter:any):Observable<any>{
    return this._httpClient.post<any>(environment.apiUrl + "/CategorySite/GetAllByCategoryId",filter);
  }
  getAllBar(filter):Observable<ResponseData>{
    return this._httpClient.post<any>(environment.apiUrl + "/CategorySite/GetAllBar",filter);
  } 
  getAllChoose(filter):Observable<ResponseData>{
    return this._httpClient.post<any>(environment.apiUrl + "/CategorySite/GetAllChoose",filter);
  } 
}
