
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
   
  
    createUpdate(AdvertismentSite: any):Observable<ResponseData>{
      return this._httpClient.post<any>(environment.apiUrl + "/AdvertismentSite/CreateUpdate", AdvertismentSite);
    } 
  
    getAll(filter):Observable<ResponseData>{
      return this._httpClient.post<any>(environment.apiUrl + "/AdvertismentSite/GetAll",filter);
    } 
    getAllDash(filter):Observable<ResponseData>{
      return this._httpClient.post<any>(environment.apiUrl + "/AdvertismentSite/GetAllDash",filter);
    } 
    getById(id:any):Observable<any>{
      let params = new HttpParams();
      params = params.append('id', id);
      return this._httpClient.get<any>(environment.apiUrl + "/AdvertismentSite/GetById", { params: params});
    } 
  
    delete(id: any):Observable<any>{
      let params = new HttpParams();
      params = params.append('id', id);
      return this._httpClient.get<any>(environment.apiUrl + "/AdvertismentSite/Delete", { params: params});
    } 
    serverRootPath(): Observable<ResponseData> {
      return this._httpClient.get<any>(environment.apiUrl + '/AdvertismentSite/ServerRootPath' );
    }
    download(url: string): Observable<Blob> {
      return this._httpClient.get(url, {
        responseType: 'blob'
      })
    }
   
  }
