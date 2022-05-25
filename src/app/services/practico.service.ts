import { Injectable } from '@angular/core';
import { Practico } from '../models/practico';

@Injectable({
  providedIn: 'root',
})
export class PracticoService {
  practicos: Array<any>;
  constructor() {
    this.practicos = new Array<Practico>();
    this.practicos = [
      {
        numero: 1,
        titulo: '',
        detalle1: '',
        detalle2: '',
      },
      {
        numero: 2,
        titulo: '',
        detalle1: '',
        detalle2: '',
      },
      {
        numero: 3,
        titulo: '',
        detalle1: '',
        detalle2: '',
      },
      {
        numero: 4,
        titulo: '',
        detalle1: '',
        detalle2: '',
      },
      {
        numero: 5,
        titulo: 'PRÁCTICA WEB SERVICES',
        detalle: [
          'Objetivo: poner en práctica los conceptos: Web Service, APIs disponibles en la web, Aplicación de la Arquitectura REST, testeo de APIs con Postman.',

          'Enunciado: Utilice el repositorio https://rapidapi.com y aplique las APIs que sean convenientes para proveer de datos a las siguientes plantillas. Aplique Service de Angular que consumirán los WebService. Para el desarrollo de este práctico use las plantillas obtenidas en el practico de Bootstrap. Incorpore estas plantillas a un nuevo proyecto angular denominado tp-webservice-xxxx (donde xxx es su LU). El acceso a los puntos se hará mediante un menú responsivo. Es requisito obligatorio aplicar todas las sugerencias realizadas por los profesores en relación a las Plantillas presentadas oportunamente.',
        ],
      },
    ];
  }
  getPracticos() {
    return this.practicos;
  }
}
