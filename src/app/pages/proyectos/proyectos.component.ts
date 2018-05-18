import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../../services/proyecto/proyecto.service';
import { Router } from '@angular/router';
import { Proyecto } from '../../models/proyecto.model';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../../services/usuario/usuario.service';

declare var swal: any;



@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styles: [`.container { margin : 50px auto; }`]
})
export class ProyectosComponent implements OnInit {

  proyectos: any[] = [];
  cargando: Boolean = true;

  constructor(  public _us: UsuarioService,
                public _ps: ProyectoService,
                public router: Router) {
    this.cargarProyecto();
   }

  ngOnInit() {
  }

  cargarProyecto() {
    this._ps.cargarProyectos()
                .subscribe( (resp: any) => {
                  this.proyectos = resp;
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
