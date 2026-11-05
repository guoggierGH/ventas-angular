import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from './auth';

export const authGuard = (categoriaMinima: number): CanActivateFn => {
    return () => {
        const auth = inject(Auth);
        const router = inject(Router);

        if (auth.tieneCategoria(categoriaMinima)) {
            return true;
        }

        if (!auth.estaLogueado()) {
            return router.createUrlTree(['/home']);
        }

        return router.createUrlTree(['/']);
    };
};
