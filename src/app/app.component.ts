import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//Importar Componentes
import { HomeComponent } from './Pages/home/home/home.component';
import { LoginComponent } from './Pages/login/login/login.component';
// Modulo Para Extraer parametros de la ruta
import { ActivatedRoute } from '@angular/router';
// Estructuras de control
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, LoginComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  // Atributos - Variables
  title = 'App_Password_Manager';
  statusComponet: boolean = true; // su valor muestra que componente - renderiza
  valor?: boolean = false;

  // Constructor
  constructor(private _route: ActivatedRoute) {
    console.log('Valor desde constructor', this.statusComponet);
  }

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this.valor = params['valueBooleans'];
      if (this.valor) {
        this.statusComponet = false;
        console.log(this.statusComponet);
      }
      console.log(this.valor);
    });
  }
}
