import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
//Importar Estructura de control
import { NgFor } from '@angular/common';

// Importar Iconos - @angular/material
import { MatIconModule } from '@angular/material/icon';

// Import interface - items o submenu
import { Items } from '../../../modules/items/items_interfaces';

@Component({
  selector: 'app-aside',
  imports: [NgStyle, NgFor, MatIconModule],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css',
})
export class AsideComponent {
  //Atributos- Variables
  arrayNamePasswoerd: Items[] = [
    { nameitems: 'All Items', nameIcons: 'home' },
    { nameitems: 'Oferta de trabajo', nameIcons: 'work' },
    { nameitems: 'Cuentas Bancarias', nameIcons: 'account_balance' },
    { nameitems: 'Plataforma de Estudio', nameIcons: 'school' },
    { nameitems: 'Correo Personales', nameIcons: 'attach_email' },
    { nameitems: 'Redes Sociales', nameIcons: 'diversity_3' },
    { nameitems: 'Servicios Generales', nameIcons: 'electrical_services' },
  ];
}
