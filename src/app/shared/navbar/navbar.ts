import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  template: `
    <nav>
      <li>
        <span>Metronome</span>
      </li>
      <li>
        <div href="#">User</div>
      </li>
    </nav>
  `,
  styleUrl: './navbar.scss'
})
export class Navbar {

}
