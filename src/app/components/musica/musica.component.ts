import { Component, OnInit } from '@angular/core';
import { QrappService } from 'src/app/services/qrapp.service';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css'],
})
export class MusicaComponent implements OnInit {
  constructor(private qrappService: QrappService) {}

  ngOnInit(): void {}
}
