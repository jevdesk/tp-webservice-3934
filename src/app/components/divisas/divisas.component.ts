import { Component, OnInit } from '@angular/core';
import { Moneda } from 'src/app/models/moneda';
import { DivisaService } from 'src/app/services/divisa.service';

@Component({
  selector: 'app-divisas',
  templateUrl: './divisas.component.html',
  styleUrls: ['./divisas.component.css'],
})
export class DivisasComponent implements OnInit {
  monedas!: Array<Moneda>;
  to!: string;
  from!: string;
  value!: number;
  data!: Array<Moneda>;
  convertido!: number;
  constructor(private divisaService: DivisaService) {
    this.listar();
  }

  ngOnInit(): void {}
  listar() {
    this.divisaService.getlist().subscribe(
      (result) => {
        this.monedas = result.response.fiats;
        this.data = Object.values(this.monedas);
      },
      (error) => {
        //this.mensaje = 'error no se pudo conectar al servidor';
      }
    );
  }
  convertir() {
    this.divisaService.convertir(this.to, this.from, this.value).subscribe(
      (result) => {
        console.log(result);
        //this.convertido = result.;
      },
      (error) => {
        //this.mensaje = 'error no se pudo conectar al servidor';
      }
    );
  }
}
