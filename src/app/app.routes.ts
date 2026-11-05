import { Routes } from '@angular/router';
import { authGuard } from './auth-guard';
import { Home } from './home/home';
import { Sucursales } from './sucursales/sucursales';
import { Login } from './login/login';
import { Ventas } from './ventas/ventas';
import { Clientes } from './clientes/clientes';
    

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'sucursales', component: Sucursales },
    { path: 'login', component: Login },
    { path: 'ventas', component: Ventas, canActivate: [authGuard(1)] },
    { path: 'clientes', component: Clientes, canActivate: [authGuard(2)] },
    { path: '**', redirectTo: '' }
];
