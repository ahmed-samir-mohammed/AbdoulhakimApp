
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResponseData } from '../models/ResponseData';


@Injectable({
    providedIn: 'root',
  })
export class MediaDetailService {
  constructor(private _httpClient: HttpClient) { }
 

  createUpdate(MediaDetailSite: any):Observable<ResponseData>{
    return this._httpClient.post<any>(environment.apiUrl + "/MediaDetailSite/CreateUpdate", MediaDetailSite);
  } 

  getAll(filter):Observable<ResponseData>{
    return this._httpClient.post<any>(environment.apiUrl + "/MediaDetailSite/GetAll",filter);
  } 
  getAllBar(filter):Observable<ResponseData>{
    return this._httpClient.post<any>(environment.apiUrl + "/MediaDetailSite/GetAllBar",filter);
  } 
  getById(id:any):Observable<any>{
    let params = new HttpParams();
    params = params.append('id', id);
    return this._httpClient.get<any>(environment.apiUrl + "/MediaDetailSite/GetById", { params: params});
  } 

  delete(id: any):Observable<any>{
    let params = new HttpParams();
    params = params.append('id', id);
    return this._httpClient.get<any>(environment.apiUrl + "/MediaDetailSite/Delete", { params: params});
  } 
  serverRootPath(): Observable<ResponseData> {
    return this._httpClient.get<any>(environment.apiUrl + '/MediaDetailSite/ServerRootPath' );
  }
  download(url: string): Observable<Blob> {
    return this._httpClient.get(url, {
      responseType: 'blob'
    })
  }
  getAllByCategoryId(filter:any):Observable<any>{
    return this._httpClient.post<any>(environment.apiUrl + "/CategorySite/GetAllByCategoryId",filter);
  }
  addVisitCount(filter:any):Observable<any>{
    return this._httpClient.post<any>(environment.apiUrl + "/CategorySite/AddVisitCount",filter);
  }
  getAllContact(filter):Observable<ResponseData>{
    return this._httpClient.post<any>(environment.apiUrl + "/CategorySite/GetAllContact",filter);
  } 
  serverRootPathConcat(): Observable<ResponseData> {
    return this._httpClient.get<any>(environment.apiUrl + '/CategorySite/ServerRootPath' );
  }
}
