import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { UsuarioService } from '../usuario/usuario.service';
import { Proyecto } from '../../models/proyecto.model';

declare var swal: any;

@Injectable()
export class TecnologiaService {

  tecnologias: any[] = [];

  constructor( private http: HttpClient,
               private _us: UsuarioService) { }

  cargarTecnologias() {
    let url = URL_SERVICIOS + '/tecnologia';

    return this.http.get(url)
              .map( (resp: any) => this.tecnologias = resp.tecnologia);
  }

  actualizarTecnologia( idTecnologia: [string], proyecto: Proyecto ) {
    let url = URL_SERVICIOS + '/proyecto/' + proyecto._id;
    url += '?token=' + this._us.token;

    proyecto.tecnologias = [idTecnologia];

    return this.http.put(url, proyecto )
          .map( (resp: any) => {
            swal('Tecnologia Agregada a', proyecto.nombre, 'success');
            return resp;
          });
  }

  eliminarTecnologia( idTecnologia: [string], proyecto: Proyecto ) {
    let url = URL_SERVICIOS + '/elemento/' + proyecto._id;
    url += '?token=' + this._us.token;

    proyecto.tecnologias = [idTecnologia];

    return this.http.put(url, proyecto )
          .map( (resp: any) => {
            swal('Tecnologia Eliminada del proyecto: ', proyecto.nombre, 'success');
            return resp;
          });
  }

}
