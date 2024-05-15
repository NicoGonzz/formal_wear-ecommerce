import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDrawer, MatDrawerContainer, MatDrawerContent } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatDrawerContainer,
    MatDrawer,
    MatDrawerContent,
    MatIconModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
