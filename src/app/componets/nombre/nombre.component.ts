import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Nombre } from 'src/app/models/nombre';

@Component({
  selector: 'app-nombre',
  templateUrl: './nombre.component.html',
  styleUrls: ['./nombre.component.css']
})
export class NombreComponent implements OnInit {

  @Input() nombre: Nombre = new Nombre();
  @Output() deleteNombre: EventEmitter<Nombre> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(nombre: Nombre): void { 
    this.deleteNombre.emit(nombre)
   }

}
