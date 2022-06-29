import { Component, OnInit } from '@angular/core';
import { QrappService } from 'src/app/services/qrapp.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-qrapp',
  templateUrl: './qrapp.component.html',
  styleUrls: ['./qrapp.component.css'],
})
export class QrappComponent implements OnInit {
  vcontent!: string;
  dato!: String;
  menssage = 'algo salio mal';
  constructor(private qrappService: QrappService) {}

  ngOnInit(): void {}
  traerQR() {
    this.qrappService.traerQr(this.vcontent).subscribe(
      (result) => {
        console.log(result);
        this.dato = result.result;
        console.log(this.dato);
      },
      (error) => {
        console.log(this.menssage);
      }
    );
  }
}
