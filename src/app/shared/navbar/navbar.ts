import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  template: `
    <nav>
      <li>
        <span>Metrotome</span>
      </li>
      <li class="nav-list">
        <a href="developer" class="{{path === '/developer' ? 'selected' : ''}}">Developer Menu</a>
        <a href="#">User</a>
      </li>
    </nav>
  `,
  styleUrl: './navbar.scss'
})
export class Navbar {
  path = '';

  constructor(private router: Router){
    this.path = window.location.pathname;
  }
}
