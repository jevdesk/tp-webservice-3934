import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { TraductorService } from 'src/app/services/traductor.service';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.component.html',
  styleUrls: ['./traductor.component.css'],
})
export class TraductorComponent implements OnInit {
  texto: string = '';
  source: string = '';
  target: string = '';
  traduccion: string = '';
  mensaje: string = '';
  constructor(
    private traductorService: TraductorService,
    private clipboardApi: ClipboardService
  ) {}

  ngOnInit(): void {}
  traducir() {
    this.traductorService
      .translateText(this.source, this.target, this.texto)
      .subscribe(
        (result) => {
          console.log(result);
          this.traduccion = result.data.translations[0].translatedText;
        },
        (error) => {
          this.mensaje = 'error no se pudo conectar al servidor';
        }
      );
  }
  esIdioma(t: string) {
    this.source = t;
  }
  otroIdioma(t: string) {
    this.target = t;
  }
  borrar() {
    this.texto = '';
    this.traduccion = '';
    this.texto = '';
    this.target = '';
    this.source = '';
  }
  copyText() {
    this.clipboardApi.copyFromContent(this.traduccion);
  }
}
