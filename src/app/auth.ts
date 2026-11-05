import { HttpClient } from '@angular/common/http';
import { Injectable, signal, inject, PLATFORM_ID } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class Auth {
    private esNavegador = isPlatformBrowser(inject(PLATFORM_ID));
    private base = 'http://localhost/';  // URL base del backend

    


    // usuario actual: null si no hay sesión
    usuario = signal<any>(this.leerGuardado());

    private leerGuardado(): any {
        if (!this.esNavegador) return null;
        const guardado = localStorage.getItem('usuario');
        return guardado ? JSON.parse(guardado) : null;
    }

    constructor(private http: HttpClient){}

    login(usuario: string, password: string): Observable<any> {
        return this.http.post<any>(this.base + 'login.php', { usuario, password }).pipe(
            tap(u => {
                this.usuario.set(u);  // al responder OK, guardamos el usuario
                if (this.esNavegador) {
                    localStorage.setItem('usuario', JSON.stringify(u));
                }
            })
        );
    }

    logout() {
        this.usuario.set(null);
        if (this.esNavegador) {
            localStorage.removeItem('usuario');
        }
    }

    estaLogueado(): boolean {
        return this.usuario() !== null;
    }

    tieneCategoria(minima: number): boolean {
        return this.estaLogueado() && this.usuario().categoria >= minima;
    }
}