import { Component } from '@angular/core';
// Importar Componentes
import { HeaderComponent } from '../../../components/header/header/header.component';
import { AsideComponent } from '../../../components/aside/aside/aside.component';
import { MainComponent } from '../../../components/main/main/main.component';
import { NgStyle } from '@angular/common';

// Modulo - Rutas
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    AsideComponent,
    MainComponent,
    NgStyle,
    RouterOutlet,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
