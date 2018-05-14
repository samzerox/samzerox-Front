import { Component } from '@angular/core';
import { ProyectoService } from '../../services/proyecto/proyecto.service';

@Component({
  selector: 'app-proyecto-config',
  templateUrl: './proyecto-config.component.html',
  styles: []
})
export class ProyectoConfigComponent {

  cargando:boolean = true;
  proyectos: any[] = [];

  constructor( private _ps: ProyectoService) {
    this.cargarProyecto();

  }

  cargarProyecto() {
    this._ps.cargarProyectos()
                .subscribe( (resp: any) => {
                  this.proyectos = resp;
                  console.log(resp);

                  this.cargando = false;
                });
  }

  guardarProyecto( proyecto ) {
    this._ps.actualizarProyecto( proyecto)
            .subscribe();
  }

}
