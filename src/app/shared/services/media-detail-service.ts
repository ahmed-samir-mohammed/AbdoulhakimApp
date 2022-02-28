
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
 

  createUpdate(MediaDetail: any):Observable<ResponseData>{
    return this._httpClient.post<any>(environment.apiUrl + "/MediaDetail/CreateUpdate", MediaDetail);
  } 

  getAll(filter):Observable<ResponseData>{
    return this._httpClient.post<any>(environment.apiUrl + "/MediaDetail/GetAll",filter);
  } 
  getAllBar(filter):Observable<ResponseData>{
    return this._httpClient.post<any>(environment.apiUrl + "/MediaDetail/GetAllBar",filter);
  } 
  getById(id:any):Observable<any>{
    let params = new HttpParams();
    params = params.append('id', id);
    return this._httpClient.get<any>(environment.apiUrl + "/MediaDetail/GetById", { params: params});
  } 

  delete(id: any):Observable<any>{
    let params = new HttpParams();
    params = params.append('id', id);
    return this._httpClient.get<any>(environment.apiUrl + "/MediaDetail/Delete", { params: params});
  } 
  serverRootPath(): Observable<ResponseData> {
    return this._httpClient.get<any>(environment.apiUrl + '/MediaDetail/ServerRootPath' );
  }
  download(url: string): Observable<Blob> {
    return this._httpClient.get(url, {
      responseType: 'blob'
    })
  }
  getAllByCategoryId(filter:any):Observable<any>{
    return this._httpClient.post<any>(environment.apiUrl + "/Category/GetAllByCategoryId",filter);
  }
  addVisitCount(filter:any):Observable<any>{
    return this._httpClient.post<any>(environment.apiUrl + "/Category/AddVisitCount",filter);
  }
}
