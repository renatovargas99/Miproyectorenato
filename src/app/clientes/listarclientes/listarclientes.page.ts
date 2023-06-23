import { Component } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { SclientesService } from 'src/app/services/sclientes.service';
import { Observer } from 'rxjs';
import { Iclientes } from 'src/app/interfaces/iclientes';

@Component({
  selector: 'app-listarclientes',
  templateUrl: './listarclientes.page.html',
  styleUrls: ['./listarclientes.page.scss'],
})
export class ListarclientesPage {

  clientes: any[] = [];

  constructor(private ClientesServ: SclientesService, private loadingCtrl: LoadingController) { }

  ionViewWillEnter() {
    this.loadClientes();
  }

  async loadClientes(event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadingCtrl.create({
      message: "Cargando...",
      spinner: "bubbles"
    });

    await loading.present();

    this.ClientesServ.listarClientes().subscribe({
      next: (resp: Iclientes) => {
        loading.dismiss();
        let listString = JSON.stringify(resp);
        this.clientes = JSON.parse(listString);
        event?.target.complete();
      },
      error: (err: any) => {
        console.log(err.message);
        loading.dismiss();
      }
    });
  }
}