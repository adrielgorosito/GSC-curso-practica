import { CanDeactivateFn } from '@angular/router';

export const guardaDosGuard: CanDeactivateFn<unknown> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  return false;
};
