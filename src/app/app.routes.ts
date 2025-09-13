import { Routes } from '@angular/router';
// Importar Componentes
import { HomeComponent } from './Pages/home/home/home.component';
import { LoginComponent } from './Pages/login/login/login.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  // DECLARAMOS RUTAS
  { path: 'home/:valueBooleans', component: AppComponent },
  { path: 'login', component: LoginComponent },
];
