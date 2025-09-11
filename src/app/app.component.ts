import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//Importar Componentes
import { HomeComponent } from './Pages/home/home/home.component';
import { LoginComponent } from './Pages/login/login/login.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'App_Password_Manager';
}
