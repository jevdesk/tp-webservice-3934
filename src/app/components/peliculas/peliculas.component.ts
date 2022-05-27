import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculasService } from 'src/app/services/pelicula.service';
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
})
export class PeliculasComponent implements OnInit {
  peliculas!: Array<Pelicula>;
  otraspelis!: Array<Pelicula>;
  titulos = ['Naruto', 'Precure', 'Ginga Eiyuu'];
  buscar: string = 'Naruto';
  pagina: number = 1;
  tamano: number = 9;
  mensaje: string = '';

  constructor(private peliculaService: PeliculasService) {
    this.buscarPelicula();
    this.otrasPeliculas();
  }

  buscarPelicula() {
    this.peliculaService
      .getPeliculas(this.pagina, this.tamano, this.buscar)
      .subscribe(
        (result) => {
          this.peliculas = result.data;
        },
        (error) => {
          this.mensaje = 'error no se pudo conectar al servidor';
        }
      );
  }

  otrasPeliculas() {
    this.peliculaService.getPeliculas(1, 3, 'jojo').subscribe(
      (result) => {
        this.otraspelis = result.data;
      },
      (error) => {
        this.mensaje = 'error no se pudo conectar al servidor';
      }
    );
  }

  ngOnInit(): void {}
}
