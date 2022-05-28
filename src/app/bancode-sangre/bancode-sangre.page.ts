import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bancode-sangre',
  templateUrl: './bancode-sangre.page.html',
  styleUrls: ['./bancode-sangre.page.scss'],
})
export class BancodeSangrePage implements OnInit {

  convocatoria:{
    nombre: String;
    cantidadonantes: String;
    gruposanguineo: String;
    comentario: String;
  }
  constructor(private router: Router) {
    if (this.router.getCurrentNavigation().extras.state){
      this.convocatoria = this.router.getCurrentNavigation().extras.state.convocatoria;
      console.log();
    }
  }

  ngOnInit() {
  }



}
