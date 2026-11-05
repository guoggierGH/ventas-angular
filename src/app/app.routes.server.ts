import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // Rutas protegidas: dependen de la sesión (localStorage), que solo existe en el navegador
  { path: 'ventas', renderMode: RenderMode.Client },
  { path: 'clientes', renderMode: RenderMode.Client },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
