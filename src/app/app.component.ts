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
    { title: 'Listar', url: 'listarclientes', icon: 'person' },
    { title: 'Agregar', url: 'addclientes', icon: 'person' },
    { title: 'Eliminar', url: 'deleteclientes', icon: 'person' },
    { title: 'Actualizar', url: 'uptadeclientes', icon: 'person' },
    { title: 'Mostrar Detalle', url: 'detailclientes', icon: 'person' },
  ];
  public labels = ['Promociones', 'Descuentos', 'Politicas de funcionamiento', 'Servicio'];
  constructor() {}
}
