import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { URL_SERVICIOS } from '../../config/config';

import { Usuario } from '../../models/usuario.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

// import swal from 'sweetalert';
declare var swal: any;


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
    let url = URL_SERVICIOS + '/usuario/5ad0f058a2f52fb5ef505095';

    return this.http.get( url )
              .map( (resp: any) =>  resp.usuario);
  }

  
  login( usuario: Usuario ) {

    // if ( recordar ) {
    //   localStorage.setItem('token', usuario.correo);
    // } else {
    //   localStorage.removeItem('correo');
    // }

    let url = URL_SERVICIOS + '/login';
    return this.http.post( url, usuario)
              .map((resp: any) => {

                // this.guardarStorage( resp.id, resp.token, resp.usuario, resp.menu );
                console.log(resp);
                  return true;
              })
              .catch ( err => {

                swal('Error en el login', err.error.mensaje, 'error');
                return Observable.throw( err );
              });
  }

}
