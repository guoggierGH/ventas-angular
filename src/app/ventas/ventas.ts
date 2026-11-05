import { Component, signal, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Articulos } from '../articulos';

@Component({
  selector: 'app-ventas',
  imports: [CurrencyPipe],
  templateUrl: './ventas.html',
  styleUrl: './ventas.css',
})
export class Ventas implements OnInit {
  ventas = signal<any[]>([]);

  constructor(private art: Articulos) {}

  ngOnInit(): void {
    this.art.getVentas().subscribe({
      next: (datos) => { this.ventas.set(datos); }
    });
  }
}
