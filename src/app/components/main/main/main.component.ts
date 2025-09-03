import { Component } from '@angular/core';
// Importar Estructura de Control
import { NgFor } from '@angular/common';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [NgFor, NgStyle],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  // Variables - Atributos
  passwordArray?: number[];

  constructor() {
    this.passwordArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  }
}
