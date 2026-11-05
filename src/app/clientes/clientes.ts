import { Component, OnInit, signal } from '@angular/core';
import { Articulos } from '../articulos';

@Component({
  imports: [],
  selector: 'app-clientes',
  styleUrl: './clientes.css',
  templateUrl: './clientes.html',
})
export class Clientes implements OnInit {
  clientes= signal<any[]>([]);

  constructor(private cli: Articulos){}

  ngOnInit(): void {
    this.cli.getClientes().subscribe({
      next:(datos) => {
      this.clientes.set(datos) }
    })
  }
}
