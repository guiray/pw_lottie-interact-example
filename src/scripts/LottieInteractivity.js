import { create } from '@lottiefiles/lottie-interactivity';

export default class LottiePlayer {
  constructor() {
    this.init();
  }

  // Défi: Créer une composante Lottie qui, avec un attribut data, permet de spécifier
  // le path json à charger
  init() {
    LottieInteractivity.create({
      mode: 'scroll',
      player: '#firstLottie',
      actions: [
        {
          visibility: [0, 1],
          type: 'seek',
          frames: [0, 100],
        },
      ],
    });
  }
}
