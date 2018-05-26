import { Injectable, EventEmitter } from '@angular/core';
import { Proyecto } from '../../models/proyecto.model';

@Injectable()
export class ModalUploadService {

  public tipo: string;
  public id: string;
  public proyecto: any;

  public oculto: string = 'oculto';
  public activo: string = 'activo';

  public notificacion = new EventEmitter<any>();

  constructor() {}

  ocultarModal() {
    this.oculto = 'oculto';
    this.id = null;
    this.tipo = null;
  }

  mostrarModal( tipo: string, id: string) {
    this.oculto = '';
    this.id = id;
    this.tipo = tipo;
  }

  ocultarTecnologias() {
    this.activo = 'activo';
    this.id = null;
  }

  mostrarTecnologias( proyecto: Proyecto) {
    this.activo = '';
    this.proyecto = proyecto;
  }

}
