import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


import { URL_SERVICIOS } from '../../config/config';

@Injectable()
export class ProyectoService {

  proyecto: any[] = [];

  constructor( public http: HttpClient,
                public activatedRoute: ActivatedRoute) { }


  cargarProyectos() {
    let url = URL_SERVICIOS + '/proyecto';

    return this.http.get(url)
              .map( (resp: any) => resp.proyecto);
  }


}
