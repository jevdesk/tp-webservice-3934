import { Injectable } from '@angular/core';
import { Enunciado } from '../models/enunciado';

@Injectable({
  providedIn: 'root',
})
export class EnunciadoService {
  enunciados: Array<any>;
  constructor() {
    this.enunciados = new Array<Enunciado>();
    this.enunciados = [
      {
        numero: 1,
        titulo: 'A. Traductor',
        detalle: [
          'Consuma una API que permita traducir entre diferentes idiomas, al menos dos. Si puede respete la plantilla de diseño. Ej. API de referencia: https://rapidapi.com/googlecloud/api/google-translate1/ (POST translate)',
          '',
          '',
          '',
          '',
        ],
      },
      {
        numero: 2,
        titulo: 'B. Portal de Películas',
        detalle: [
          'Consuma una API adecuada para obtener información que pueble la plantilla de diseño similar a la siguiente. La información puede variar levemente de acuerdo la información que provea el WebService. A continuación, mostramos algunas APIs de referencia:',
          'Filmaffinity unofficial => https://rapidapi.com/mack06/api/filmaffinity-unofficial (método GET Detail)',
          '',
          '',
          '',
        ],
      },

      {
        numero: 3,
        titulo: 'C. Cotización de divisas',
        detalle: [
          'Consuma una API para obtener información de las cotizaciones de un grupo de 3 monedas de países a elección mostrarlas en la siguiente tabla.',
          'Implemente funcionalidad al formulario para que pueda funcionar como con conversor. API de ejemplo https://rapidapi.com/neutrinoapi/api/convert-1',
          '[opcional] Busque una API que retorne los códigos internacionales de monedas para poblar la lista desplegable, o una que dé respuestas al pto. A y B.',
          '',
          '',
        ],
      },

      {
        numero: 4,
        titulo: 'D. API a elección',
        detalle: [
          'Consuma una API a elección que sea de interés para la clase y poder aplicarla en un futuro proyecto Final, se deja ejemplos de temáticas que puedan ser de interés. Debe realizar el frontend o formulario para la captura de información y mostrar el resultado del WebService.',
          'API para generar un código QR, preferentemente que retorne como salida un string en formato base-64 que puede ser usado como el source “src” de una etiqueta <img>',
          'API para traducir texto a audio.',
          'API para conocer el clima de una ciudad, pto. Cardinal, etc.',
          'API que permite buscar un tema musical y retorna url del audio para ponerlo como source de <media>',
        ],
      },
    ];
  }
  getEnunciados() {
    return this.enunciados;
  }
}
