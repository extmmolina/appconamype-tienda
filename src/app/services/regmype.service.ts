import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpService} from './http.service';

@Injectable({
  providedIn: 'root'
})
export class RegmypeService {

   apiUrl = 'https://api.conamype.gob.sv/v1/registro-mype/'; //'http://192.168.18.150/registroc/web/';
  //  apiUrl = 'http://localhost:8000/v1/registro-mype/'; //'http://192.168.18.150/registroc/web/';
  headers = new HttpHeaders()
   .set('Content-Type', 'application/x-www-form-urlencoded  ')
  //  .set('Accept', 'application/json, text/plain')
  //  .set("Access-Control-Allow-Origin", "*");
  //  .set("Access-Control-Expose-Headers", "X-Requested-With,Content-Length,Content-Range")
  //  .set("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token, Accept, Authorization, X-Request-With, Access-Control-Request-Method, Access-Control-Request-Headers")
  //  .set("Access-Control-Allow-Credentials", "true")
  //  .set("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS, TRACE, PATCH, CONNECT");


  options = { headers: this.headers, withCredentials: false };

  constructor(private http: HttpClient, private httpService: HttpService) { }

  postCIIU(postData: any): Observable<any> {
    // console.log("producto1: "+postData);
    const body = new HttpParams()
        .set('query', postData);
    return this.httpService.postRegMype('ciiu', body);
  }

  postCliente(postData: any): Observable<any> {
    const body = new HttpParams()
        .set('dui', postData.dui)
        .set('dui_operador', postData.dui_operador)
        .set('nit', postData.nit)
        .set('constitucion_id', postData.constitucion_id)
        .set('tipo_asociacion_id', postData.tipo_asociacion_id)
        .set('nombre', postData.nombre)
        .set('razon_social', postData.razon_social)
        .set('iva', postData.iva)
        .set('fecha_fundacion', postData.fecha_fundacion)
        .set('direccion', postData.direccion)
        .set('departamento_id', postData.departamento_id)
        .set('municipio_id', postData.municipio_id)
        .set('zona_id', postData.zona_id)
        .set('canton_id', postData.canton_id)
        .set('nombre1', postData.nombre1)
        .set('nombre2', postData.nombre2)
        .set('apellido1', postData.apellido1)
        .set('apellido2', postData.apellido2)
        .set('conocido', postData.conocido)
        .set('nit_persona', postData.nit_persona)
        .set('numero_otro_documento', postData.numero_otro_documento)
        .set('fecha_nacimiento', postData.fecha_nacimiento)
        .set('sexo', postData.sexo)
        .set('email', postData.email)
        .set('telefono', postData.telefono)
        .set('celular', postData.celular)
        .set('ventas', postData.ventas)
        .set('empleo_hr', postData.empleo_hr)
        .set('empleo_mr', postData.empleo_mr)
        .set('empleo_hnr', postData.empleo_hnr)
        .set('empleo_mnr', postData.empleo_mnr)
        .set('aprendices', postData.aprendices)
        .set('primaria', postData.primaria)
        .set('secundarias', postData.secundarias);
    return this.httpService.postRegMype('cliente', body.toString());
  }

  get(serviceName: string): Observable<any> {
    this.headers = new HttpHeaders();
  //  .set('Content-Type', 'application/x-www-form-urlencoded  ');
  //  .set('Accept', 'application/json, text/plain')
  //  .set("Access-Control-Allow-Origin", "*")
  //  .set("Access-Control-Expose-Headers", "X-Requested-With,Content-Length,Content-Range")
  //  .set("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token, Accept, Authorization, X-Request-With, Access-Control-Request-Method, Access-Control-Request-Headers")
  //  .set("Access-Control-Allow-Credentials", "true")
  //  .set("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS, TRACE, PATCH, CONNECT");


    this.options = { headers: this.headers, withCredentials: false };
    const url = this.apiUrl + serviceName;
    return this.http.get(url, this.options);
  }
}
