import { Routes } from '@angular/router';
// Importar Componentes
import { HomeComponent } from './Pages/home/home/home.component';
import { LoginComponent } from './Pages/login/login/login.component';
import { SignUpComponent } from './Pages/sign-Up/sign-up/sign-up.component';

export const routes: Routes = [
  // DECLARAMOS RUTAS
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Carga Inicialmente el componente
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
];
