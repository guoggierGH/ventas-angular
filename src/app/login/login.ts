import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../auth';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  usuario = '';
  password = '';
  error = '';

  constructor(private auth: Auth, private router: Router) {}

  ingresar() {
    this.error = '';
    this.auth.login(this.usuario, this.password).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: () => {
        this.error = 'Credenciales inválidas';
      }
    });
  }
}

