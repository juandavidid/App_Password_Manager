import { Component } from '@angular/core';

import { NgStyle } from '@angular/common';
// Importar Modulo Ruta
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [NgStyle, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {}
