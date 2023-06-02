import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Login', url: 'login', icon: 'log-in' },
    { title: 'Inicio', url: 'inicio', icon: 'home' },
    { title: 'Restoranes', url: 'restoranes', icon: 'beer' },
    { title: 'Pagar', url: 'pagar', icon: 'card' },
    { title: 'Mi Perfil', url: 'mi-perfil', icon: 'person' },
  ];
  public labels = ['Promociones', 'Descuentos', 'Politicas de funcionamiento', 'Servicio'];
  constructor() {}
}
