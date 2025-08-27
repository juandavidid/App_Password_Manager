import { Component } from '@angular/core';
// Importar Componentes
import { HeaderComponent } from '../../../components/header/header/header.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
