import { disableAnimations } from '$lib/store';

export const enableAnimations = () => {
  disableAnimations.update(() => false);
};
