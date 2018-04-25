import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { URL_SERVICIOS } from '../../config/config';

import 'rxjs/add/operator/map';


@Injectable()
export class UsuarioService {

  usuario: any[] = [];

  constructor(  public http: HttpClient ) {
    // this.cargarUsuario();
  }

  cargarUsuarios() {
    let url = URL_SERVICIOS + '/usuario';

    return this.http.get( url )
              .map( (resp: any) =>  resp.usuario);
  }

  cargarUsuario() {
    let url = URL_SERVICIOS + '/usuario/5ae0b1295192ea5248ef80e0';

    return this.http.get( url )
              .map( (resp: any) =>  resp.usuario);
  }

}
