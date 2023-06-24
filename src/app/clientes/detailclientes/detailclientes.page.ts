import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SclientesService } from 'src/app/services/sclientes.service';

@Component({
  selector: 'app-detailclientes',
  templateUrl: './detailclientes.page.html',
  styleUrls: ['./detailclientes.page.scss'],
})
export class DetailclientesPage implements OnInit {

  cliente = {
    id: 0,
    nombre: "cliente",
    edad: "30"
  };

  constructor(private clienteServ: SclientesService, private router: Router) { }

  ngOnInit() {
    this.getclienteByID(this.getIdfromURL());
  }

  getIdfromURL() {
    let url = this.router.url;
    let arr = url.split("/", 3);
    let id = parseInt(arr[2]);
    return id;
  }

  getclienteByID(clienteID: number) {
    this.clienteServ.getClientesByID(clienteID).subscribe(
      (resp: any) => {
        if (resp && resp.length > 0) {
          this.cliente = {
            id: resp[0].id,
            nombre: resp[0].nombre,
            edad: resp[0].edad
          };
        }
      }
    );
  }
}

