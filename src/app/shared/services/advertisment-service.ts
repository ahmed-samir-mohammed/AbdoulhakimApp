
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResponseData } from '../models/ResponseData';


@Injectable({
    providedIn: 'root',
  })
  export class AdvertismentService {
    constructor(private _httpClient: HttpClient) { }
   
  
    createUpdate(Advertisment: any):Observable<ResponseData>{
      return this._httpClient.post<any>(environment.apiUrl + "/Advertisment/CreateUpdate", Advertisment);
    } 
  
    getAll(filter):Observable<ResponseData>{
      return this._httpClient.post<any>(environment.apiUrl + "/Advertisment/GetAll",filter);
    } 
    getAllDash(filter):Observable<ResponseData>{
      return this._httpClient.post<any>(environment.apiUrl + "/Advertisment/GetAllDash",filter);
    } 
    getById(id:any):Observable<any>{
      let params = new HttpParams();
      params = params.append('id', id);
      return this._httpClient.get<any>(environment.apiUrl + "/Advertisment/GetById", { params: params});
    } 
  
    delete(id: any):Observable<any>{
      let params = new HttpParams();
      params = params.append('id', id);
      return this._httpClient.get<any>(environment.apiUrl + "/Advertisment/Delete", { params: params});
    } 
    serverRootPath(): Observable<ResponseData> {
      return this._httpClient.get<any>(environment.apiUrl + '/Advertisment/ServerRootPath' );
    }
    download(url: string): Observable<Blob> {
      return this._httpClient.get(url, {
        responseType: 'blob'
      })
    }
   
  }
