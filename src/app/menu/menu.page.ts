import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  activePath = '';

  pages = [
    {
      titulo: 'Inicio',
      url: '/menu/inicio',
      icono: 'home'
    },
    {
      titulo: 'Banco de Sangre',
      url: '/menu/bancode-sangre',
      icono: 'water'
    },
    {
      titulo: 'Convocatorias',
      url: '/menu/convocatorias',
      icono: 'megaphone'
    },
    {
      titulo: 'Información',
      url: '/menu/informacion',
      icono: 'reader'
    },
    {
      titulo: '¿Que es Donar?',
      url: '/menu/quedonar',
      icono: 'help'
    },
    {
      titulo: 'Requisitos',
      url: '/menu/requisitos',
      icono: 'list'
    },
    {
      titulo: 'Prevencion',
      url: '/menu/prevencion',
      icono: 'medkit'
    },
  ]

  ngOnInit() {
  }

  constructor(private router: Router, public alertController: AlertController,
    public navCtrl: NavController) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.activePath = event.url
    })
  }
  // cambiarIndiceSeleccionado(i){
  //   this.indiceSeleccionado = i;
  // }

  async salir(){
    const alert = await this.alertController.create({
      header: 'Salir',
      message: '¿Deberitas te quieres salir?',
      buttons: [
        {
          text: 'No mejor no',
          handler: () => {

          }
        }, {
          text: 'Sii',
          handler: () => {
            localStorage.removeItem('ingresado');
            this.navCtrl.navigateRoot('login');
          }
        }
      ]
    });

    await alert.present();
  }

}



