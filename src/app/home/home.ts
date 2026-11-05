import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { Auth } from '../auth';
import { Articulos } from '../articulos';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  resumen = signal<any>(null);

  constructor(public auth: Auth, private art: Articulos) {}

  ngOnInit(): void {
    this.art.getResumen().subscribe({
      next: (datos) => { this.resumen.set(datos); }
    });
  }

  nombreCategoria(categoria: number): string {
    if (categoria >= 2) {
      return 'Administrador';
    } else if (categoria === 1) {
      return 'Vendedor';
    }
    return 'Invitado';
  }
}
