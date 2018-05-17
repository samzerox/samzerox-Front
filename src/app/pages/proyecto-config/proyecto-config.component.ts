import { Component } from '@angular/core';
import { ProyectoService } from '../../services/proyecto/proyecto.service';
import { NgForm } from '@angular/forms';
import { Proyecto } from '../../models/proyecto.model';
import { Router } from '@angular/router';

declare var swal: any;


@Component({
  selector: 'app-proyecto-config',
  templateUrl: './proyecto-config.component.html',
  styles: []
})
export class ProyectoConfigComponent {

  cargando:boolean = true;
  proyectos: any[] = [];

  constructor( private _ps: ProyectoService,
                private router: Router) {
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

  crearProyecto( forma: NgForm) {
    if (forma.invalid) {
      return;
    }

    let proyecto = new Proyecto(forma.value.nombre, forma.value.descripcion, forma.value.link);

    this._ps.crearProyecto( proyecto )
                  .subscribe(correcto => {
                    this.cargarProyecto();
                    } );

  }


  borrarProyecto( proyecto: Proyecto ) {

    swal({
      title: 'Estas seguro?',
      text: 'Esta a punto de borrar el proyecto ' + proyecto.nombre,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
    .then( borrar => {
        console.log( borrar );

      if (borrar) {
        this._ps.borrarProyecto( proyecto._id)
                  .subscribe( borrado => {
                    console.log(borrado);
                    this.cargarProyecto();
                  });
      }
    });

}


}
