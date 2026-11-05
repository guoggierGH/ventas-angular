import { Component, OnInit, signal } from '@angular/core';
import { Articulos } from '../articulos';

@Component({
  selector: 'app-sucursales',
  imports: [],
  templateUrl: './sucursales.html',
  styleUrl: './sucursales.css',
})
export class Sucursales implements OnInit {
  sucursales = signal<any[]>([]);

  constructor(private art: Articulos) {}

  ngOnInit(): void {
    this.art.getSucursales().subscribe({
      next: (datos) => { this.sucursales.set(datos); }
    });
  }
}
