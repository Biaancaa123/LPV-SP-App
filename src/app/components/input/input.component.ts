import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() convocatoria:{
    fecha: string,
    fechaTexto: string,
    texto: string
  };

  @Input() soloLectura: boolean = false;

  @Output() eventoGuardar: EventEmitter<{
    fecha: string,
    fechaTexto: string,
    texto: string
  }> = new EventEmitter<{
    fecha: string,
    fechaTexto: string,
    texto: string
  }>();;

  constructor() { }

  guardar(){
    this.eventoGuardar.emit(this.convocatoria);
  }

}
