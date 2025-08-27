import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//Importar Componentes
import { HomeComponent } from './Pages/home/home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'App_Password_Manager';
}
