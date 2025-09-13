import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
// Importar Modulo Ruta
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [NgStyle, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {}
