import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SclientesService } from 'src/app/services/sclientes.service';

@Component({
  selector: 'app-uptadeclientes',
  templateUrl: './uptadeclientes.page.html',
  styleUrls: ['./uptadeclientes.page.scss'],
})
export class UptadeclientesPage {
  cliente = {
    id: 0,
    nombre: "",
    edad: ""
  };

  constructor(private clienteServ: SclientesService, private router: Router) {}

  ionViewWillEnter() {
    this.getclienteByID(this.getIdfromURL());
  }

  getIdfromURL() {
    let url = this.router.url;
    let arr = url.split("/", 3);
    let id = parseInt(arr[2]);
    return id;
  }

  getclienteByID(clienteID: number) {
    this.clienteServ.getClientesByID(clienteID).subscribe((resp: any) => {
      if (resp && resp.length > 0) {
        this.cliente = {
          id: resp[0].id,
          nombre: resp[0].nombre,
          edad: resp[0].edad
        };
      }
    });
  }

  uptadecliente() {
    this.clienteServ.actualizarCliente(this.cliente).subscribe()
    this.router.navigateByUrl("/listarclientes")

  }
}
