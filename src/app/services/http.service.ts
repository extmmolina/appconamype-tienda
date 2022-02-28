import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthConstants } from '../config/auth-constants';
import { StorageService } from './storage.service';
import { Observable } from 'rxjs';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  headers = new HttpHeaders()
  .set('Content-Type', 'application/x-www-form-urlencoded  ')
  //  .set('Accept', 'application/json, text/plain')
   .set("Access-Control-Allow-Origin", "*")
   .set("Access-Control-Expose-Headers", "X-Requested-With,Content-Length,Content-Range")
   .set("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token, Accept, Authorization, X-Request-With, Access-Control-Request-Method, Access-Control-Request-Headers")
   .set("Access-Control-Allow-Credentials", "true")
   .set("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS, TRACE, PATCH, CONNECT");


  options = { headers: this.headers, withCredentials: false };

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) { }

  post(serviceName: string, data: any) {
    const url = environment.apiUrl + serviceName;
    return this.http.post(url, data, this.options);
    // return this.http.post(url, JSON.stringify(data), this.options);
  }

  postProducto(serviceName: string, data: any) {
    const url = environment.apiUrl + serviceName;
    return this.http.post(url, data, this.options);
  }

  delete(serviceName: string) {
    const url = environment.apiUrl + serviceName;
    return this.http.delete(url, this.options);
  }

  postRegMype(serviceName: string, data: any) {
    // const apiUrl = 'http://localhost:8000/v1/registro-mype/';
    // const apiUrl = 'http://192.168.18.150/registroc/web/';
    const apiUrl = 'http://erp.conamype.gob.sv/registroc/web/';
    let headers = new HttpHeaders();
    let options = { headers: headers, withCredentials: false };

    console.log("producto1: " + data);

    const url = apiUrl + serviceName;
    return this.http.post(url, data, options);
  }

  get(serviceName: string): Observable<any> {
    let headers = new HttpHeaders();
    let options = { headers: headers, withCredentials: false };

    const url = environment.apiUrl + serviceName;
    return this.http.get(url, options);
  }
}
