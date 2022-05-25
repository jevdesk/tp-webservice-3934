import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enunciado } from 'src/app/models/enunciado';
import { Practico } from 'src/app/models/practico';
import { EnunciadoService } from 'src/app/services/enunciado.service';
import { PracticoService } from 'src/app/services/practico.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  practicos: Array<Practico>;
  enunciados!: Array<Enunciado>;
  constructor(
    private practicoService: PracticoService,
    private enunciadoService: EnunciadoService,
    private router: Router
  ) {
    this.practicos = new Array<Practico>();
    this.enunciados = new Array<Enunciado>();
    this.mostrarHistoricos();
  }
  mostrarHistoricos() {
    this.practicos = this.practicoService.getPracticos();
    this.enunciados = this.enunciadoService.getEnunciados();
  }
  ngOnInit(): void {}
}
