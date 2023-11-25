import { CanActivateFn } from '@angular/router';

export const guardaUnoGuard: CanActivateFn = (route, state) => {
  console.log('Pasé por la guarda');
  return true;
};
