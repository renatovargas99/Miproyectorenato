import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SclientesService } from 'src/app/services/sclientes.service';

@Component({
  selector: 'app-deleteclientes',
  templateUrl: './deleteclientes.page.html',
  styleUrls: ['./deleteclientes.page.scss'],
})
export class DeleteclientesPage implements OnInit {

  cliente={
    id: 0,
    nombre: "",
    edad: ""
  }

  constructor(private router:Router, private clienteServ:SclientesService) { }

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

  eliminarCliente(){
    this.clienteServ.eliminarCliente(this.cliente).subscribe()
    this.router.navigateByUrl("/listarclientes")
  }

}
