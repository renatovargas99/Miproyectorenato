import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  register(form: NgForm) {
    // Aquí puedes agregar la lógica de registro de cuenta
  }

}
