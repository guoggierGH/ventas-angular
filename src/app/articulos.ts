import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class Articulos {
   private url = 'http://localhost/';

    constructor(private http: HttpClient){}

    getClientes(): Observable<any> {
        return this.http.get<any>(this.url + 'getClientes.php');
    }

    getSucursales(): Observable<any> {
        return this.http.get<any>(this.url + 'getSucursales.php');
    }

    getVentas(): Observable<any> {
        return this.http.get<any>(this.url + 'getVentas.php');
    }

    getResumen(): Observable<any> {
        return this.http.get<any>(this.url + 'getResumen.php');
    }
}
