import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


import { URL_SERVICIOS } from '../../config/config';
import { UsuarioService } from '../usuario/usuario.service';
import { Proyecto } from '../../models/proyecto.model';

import { Observable } from 'rxjs/Observable';

declare var swal: any;

@Injectable()
export class ProyectoService {

  proyecto: any[] = [];

  constructor( public http: HttpClient,
                public activatedRoute: ActivatedRoute,
                private _us: UsuarioService) { }


  cargarProyectos() {
    let url = URL_SERVICIOS + '/proyecto';

    return this.http.get(url)
              .map( (resp: any) => resp.proyecto);
  }

  cargarProyecto( idx: string) {
    let url = URL_SERVICIOS + '/proyecto/' + idx;

    return this.http.get(url)
              .map( (resp: any) => resp.proyecto);
  }

  crearProyecto( proyecto: Proyecto) {
    let url = URL_SERVICIOS + '/proyecto';
        url += '?token=' + this._us.token;

        return this.http.post( url, proyecto )
          .map( (resp: any) => {
            swal( 'Proyecto creado', proyecto.nombre, 'success');
            return resp.proyecto;
          })
          .catch ( err => {

            swal(err.error.mensaje, err.error.errors.message, 'error');
            return Observable.throw( err );
          });
  }

  borrarProyecto( id: string) {
    let url = URL_SERVICIOS + '/proyecto/' + id;
    url += '?token=' + this._us.token;

    return this.http.delete( url )
              .map( resp => {
                swal('Proyecto borrado', ' El proyecto ha sido borrao correctamente', 'success');
                return true;
              });
  }


}
