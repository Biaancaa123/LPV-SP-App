import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";

import { AlertController, NavController } from "@ionic/angular";

@Component({
  selector: 'app-convocatorias',
  templateUrl: './convocatorias.page.html',
  styleUrls: ['./convocatorias.page.scss'],
})
export class ConvocatoriasPage implements OnInit {
  formularioConvocatoria: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController) {

      this.formularioConvocatoria = this.fb.group({
        'nombre': new FormControl("",Validators.required),
        'cantidadonantes': new FormControl("",Validators.required),
        'gruposanguineo': new FormControl("",Validators.required),
        'comentario': new FormControl("",Validators.required)

      })

  }

  ngOnInit() {
  }

  async guardar(){
    var f = this.formularioConvocatoria.value;

    if (this.formularioConvocatoria.invalid){
      const alert = await this.alertController.create({
          header: "Datos incompletos",
          message: "Tenes que rellenar los datos",
          buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }

    var convocatoria = {
      nombre: f.nombre,
      cantidadonantes: f.cantidadonantes,
      gruposanguineo: f.gruposanguineo,
      comentario: f.comentario
    }

    localStorage.setItem('convocatoria', JSON.stringify(convocatoria));
    localStorage.setItem('guardado', 'true');
    this.navCtrl.navigateRoot('menu/inicio');
  }

}
