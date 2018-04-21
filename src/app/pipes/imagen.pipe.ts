import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(imagen: string, tipo: string = 'usuario'): any {
    let url = URL_SERVICIOS + '/img';

    if (!imagen) {
      return url + '/usuarios/xxx';
    }

    switch (tipo) {
      case 'usuario':
         url += '/usuarios/' + imagen;
      break;

      case 'captura':
        url += '/capturas/' + imagen;
      break;

      case 'portada':
        url += '/portadas/' + imagen;
      break;

      case 'descarga':
        url += '/descargas/' + imagen;
      break;

      default:
        console.log('tipo de imagen no existe, usuario, captura, portada');
        url += '/usuarios/xxx';
      break;
    }

    return url;

  }

}
