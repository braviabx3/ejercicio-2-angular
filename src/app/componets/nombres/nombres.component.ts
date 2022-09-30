import { Component, OnInit } from '@angular/core';
import { Nombre } from 'src/app/models/nombre';

@Component({
  selector: 'app-nombres',
  templateUrl: './nombres.component.html',
  styleUrls: ['./nombres.component.css']
})
export class NombresComponent implements OnInit {

  nombres: Nombre[] = [];

  constructor() {}

  ngOnInit(): void {
    this.nombres = [
      {
        id: 1,
        name: 'José',
        lastname: 'Peréz'
      },
      {
        id: 2,
        name: 'Luis',
        lastname: 'Morales'
      },
      {
        id: 3,
        name: 'Ana Marìa',
        lastname: 'Campos'
      }];
  }
  deleteNombre(nombre: Nombre) {
    this.nombres = this.nombres.filter(x =>
      x.id!== nombre.id);
  }
}
