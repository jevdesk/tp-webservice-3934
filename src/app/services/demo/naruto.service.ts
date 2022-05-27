import { Injectable } from '@angular/core';
import { Anime } from '../models/anime';
@Injectable({
  providedIn: 'root',
})
export class NarutoService {
  peliculas: Array<any>;
  constructor() {
    this.peliculas = new Array<Anime>();
    this.peliculas = [
      {
        id: '271963',
        title: 'Naruto: Shippûden (Serie de TV)',
        director: 'Masashi Kishimoto (Creador), Hayato Date, Atsushi Dakukawa',
        votes: 9089,
        rating: 7.3,
        link: 'https://www.filmaffinity.com/es/film271963.html',
        year: 2007,
        lang: 'es',
      },
      {
        id: '163778',
        title: 'Naruto Shippuden the Movie: Bonds',
        director: 'Hajime Kamegaki',
        votes: 504,
        rating: 5.9,
        link: 'https://www.filmaffinity.com/es/film163778.html',
        year: 2008,
        lang: 'es',
      },
      {
        id: '370855',
        title: 'Secret of Naruto',
        director: 'Teinosuke Kinugasa',
        votes: 0,
        link: 'https://www.filmaffinity.com/es/film370855.html',
        year: 1957,
        lang: 'es',
      },
      {
        id: '775404',
        title: 'Naruto Shippûden 6: El camino ninja',
        director: 'Hayato Date',
        votes: 290,
        rating: 5.9,
        link: 'https://www.filmaffinity.com/es/film775404.html',
        year: 2012,
        lang: 'es',
      },
      {
        id: '674388',
        title: 'Naruto (Serie de TV)',
        director: 'Masashi Kishimoto (Creador), Hayato Date, Akira Shimizu',
        votes: 17595,
        rating: 6.8,
        link: 'https://www.filmaffinity.com/es/film674388.html',
        year: 2002,
        lang: 'es',
      },
      {
        id: '182659',
        title: 'Live Spectacle Naruto',
        director: 'Akiko Kodama',
        votes: 0,
        link: 'https://www.filmaffinity.com/es/film182659.html',
        year: 2015,
        lang: 'es',
      },
      {
        id: '632381',
        title:
          'Naruto la película 3: La gran excitación! Pánico animal en la isla de la Luna',
        director: 'Toshiyuki Tsuru',
        votes: 513,
        rating: 5,
        link: 'https://www.filmaffinity.com/es/film632381.html',
        year: 2006,
        lang: 'es',
      },
      {
        id: '948014',
        title: 'Naruto Spin-Off: Rock Lee & His Ninja Pals (Serie de TV)',
        country: '',
        director: ['Masahiko Murata'],
        votes: 0,
        rating: 4.3,
        link: 'https://www.filmaffinity.com/es/film948014.html',
        year: 2012,
        lang: 'es',
      },
      {
        id: '834505',
        title:
          'Naruto la película 2: Las ruinas ilusorias en lo profundo de la tierra',
        director: 'Hirotsugu Kawasaki',
        votes: 609,
        rating: 5.1,
        link: 'https://www.filmaffinity.com/es/film834505.html',
        year: 2005,
        lang: 'es',
      },
      {
        id: '634970',
        title:
          'Naruto: Batalla en la Villa Oculta de la Cascada ¡Yo soy el heroe!',
        director: 'Hayato Date',
        votes: 115,
        rating: 5.1,
        link: 'https://www.filmaffinity.com/es/film634970.html',
        year: 2004,
        lang: 'es',
      },
      {
        id: '435678',
        title: 'En busca del trébol carmesí de cuatro hojas (C)',
        director: 'Hayato Date',
        votes: 45,
        rating: 4.9,
        link: 'https://www.filmaffinity.com/es/film435678.html',
        year: 2002,
        lang: 'es',
      },
      {
        id: '904602',
        title: 'Naruto vs. Konohamaru!! (C)',
        director: 'Hayato Date',
        votes: 134,
        rating: 4.7,
        link: 'https://www.filmaffinity.com/es/film904602.html',
        year: 2011,
        lang: 'es',
      },
      {
        id: '387802',
        title: 'Boruto: Naruto the Movie',
        director: 'Hiroyuki Yamashita',
        votes: 489,
        rating: 6.3,
        link: 'https://www.filmaffinity.com/es/film387802.html',
        year: 2015,
        lang: 'es',
      },
      {
        id: '319875',
        title: 'Boruto: Naruto Next Generations (Serie de TV)',
        director: 'Noriyuki Abe, Hiroyuki Yamashita',
        votes: 284,
        rating: 5.4,
        link: 'https://www.filmaffinity.com/es/film319875.html',
        year: 2017,
        lang: 'es',
      },
      {
        id: '575673',
        title: 'Naruto: Shippuuden - The True Legend of Itachi (Serie de TV)',
        director: 'Masashi Kishimoto (Creador)',
        votes: 173,
        rating: 7.6,
        link: 'https://www.filmaffinity.com/es/film575673.html',
        year: 2016,
        lang: 'es',
      },
      {
        id: '315245',
        title: 'Naruto',
        director: 'Michael Gracey',
        votes: 0,
        link: 'https://www.filmaffinity.com/es/film315245.html',
        year: 2023,
        lang: 'es',
      },
      {
        id: '454535',
        title: 'Naruto: Shippûden: La película',
        director: 'Hajime Kamegaki',
        votes: 585,
        rating: 5.9,
        link: 'https://www.filmaffinity.com/es/film454535.html',
        year: 2007,
        lang: 'es',
      },
      {
        id: '957597',
        title: 'Naruto Shippûden 5: Blood Prison',
        director: 'Masahiko Murata',
        votes: 223,
        rating: 5.6,
        link: 'https://www.filmaffinity.com/es/film957597.html',
        year: 2011,
        lang: 'es',
      },
      {
        id: '238027',
        title:
          'Naruto La Película: ¡La Gran misión! ¡El rescate de la Princesa de la Nieve!',
        director: 'Tensai Okamura',
        votes: 1055,
        rating: 5.2,
        link: 'https://www.filmaffinity.com/es/film238027.html',
        year: 2004,
        lang: 'es',
      },
      {
        id: '331941',
        title: 'Naruto Shippûden 4: The Lost Tower',
        director: 'Masahiko Murata',
        votes: 307,
        rating: 5.7,
        link: 'https://www.filmaffinity.com/es/film331941.html',
        year: 2010,
        lang: 'es',
      },
      {
        id: '972228',
        title: 'Naruto Shippûden 3: Inheritors of Will of Fire',
        director: 'Masahiko Murata',
        votes: 357,
        rating: 6.1,
        link: 'https://www.filmaffinity.com/es/film972228.html',
        year: 2009,
        lang: 'es',
      },
      {
        id: '956269',
        title: 'The Last: Naruto the Movie',
        director: 'Tsuneo Kobayashi',
        votes: 545,
        rating: 5.8,
        link: 'https://www.filmaffinity.com/es/film956269.html',
        year: 2014,
        lang: 'es',
      },
    ];
  }
  getNaruto() {
    return this.peliculas;
  }
}