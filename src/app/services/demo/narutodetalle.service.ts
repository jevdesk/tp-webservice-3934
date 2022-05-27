import { Injectable } from '@angular/core';
import { AnimeDetalle } from '../models/animedetalle';

@Injectable({
  providedIn: 'root',
})
export class NarutoDetalleService {
  pelicula: Array<any>;
  constructor() {
    this.pelicula = new Array<AnimeDetalle>();
    this.pelicula = [
      {
        id: '948014',
        title: 'Naruto Spin-Off: Rock Lee & His Ninja Pals (Serie de TV)',
        link: 'https://www.filmaffinity.com/es/film948014.html',
        director: ['Masahiko Murata'],
        country: '',
        excerpt:
          'Serie de TV (2012-2013). 51 episodios. Pequeñas historias cortas protagonizadas por los personajes de NARUTO, principalmente por Rock Lee, con un estilo de humor en versión super deforme. (FILMAFFINITY)',
        genres: ['Serie de TV', 'Animación', 'Comedia'],
        duration: '25 min.',
        lang: 'es',
        images: [
          'https://pics.filmaffinity.com/naruto_sd_rock_lee_no_seishun_full_power_ninden-148204590-large.jpg',
        ],
        rating: 4.3,
        votes: 0,
        year: 2012,
      },
    ];
  }
  getDetalle() {
    return this.pelicula;
  }
}
