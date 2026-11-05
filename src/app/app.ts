import { Component, signal } from '@angular/core';
import { RouterOutlet, Router, RouterLink } from '@angular/router';

import { Auth } from './auth';


@Component({
  imports: [RouterOutlet, RouterLink],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  constructor(public auth: Auth, private router: Router) {}
  
  salir() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
