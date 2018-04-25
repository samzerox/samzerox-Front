import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../../services/proyecto/proyecto.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styles: []
})
export class ProyectoComponent implements OnInit {

  proyecto: any[] = [];
  cargando: Boolean = true;

  constructor(public _ps: ProyectoService,
              public activatedRoute: ActivatedRoute) {

                activatedRoute.params.subscribe( params => {

                  let id = params['id'];
                    this.cargarProyecto( id );
                });

  }

  ngOnInit() { }

  cargarProyecto(  id ) {
    this._ps.cargarProyecto( id )
                .subscribe( (resp: any) => {
                  this.proyecto = resp;
                  this.cargando = false;
                });
  }



}
