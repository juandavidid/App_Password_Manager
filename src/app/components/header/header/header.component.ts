import { Component, HostListener } from '@angular/core';
import { NgStyle } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [NgStyle, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  menuOpen: boolean = false;
  displayIcon: boolean = true;
  userName: string = 'Juan David';

  // Alternar el menu al hacer clic en el icono
  toggleMenu(event: MouseEvent) {
    event.stopPropagation(); //Evita que el clic cierre el menu inmediatamente
    this.menuOpen = !this.menuOpen;
    this.displayIcon = !this.displayIcon;
  }
  // Detectar clic fuera del menú
  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    this.menuOpen = false;
    this.displayIcon = true;
  }
}
