import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Icliente } from 'src/app/interfaces/icliente';
import { SclientesService } from 'src/app/services/sclientes.service';

@Component({
  selector: 'app-addclientes',
  templateUrl: './addclientes.page.html',
  styleUrls: ['./addclientes.page.scss'],
})
export class AddclientesPage implements OnInit {

  newCliente :Icliente ={
    nombre: "Cliente nuevo",
    edad : "edad nueva"
  }

  constructor(
    private ClienteServ:SclientesService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  crearCliente (){
    this.ClienteServ.crearCliente(this.newCliente).subscribe()
    this.router.navigateByUrl("/listarclientes")
  }

}
