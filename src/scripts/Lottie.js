import lottieWeb from 'lottie-web';
import { LottieInteractivity } from '@lottiefiles/lottie-interactivity';
import create from '@lottiefiles/lottie-interactivity';

export default class Lottie {
  constructor() {
    this.init();
  }

  // Défi: Créer une composante Lottie qui, avec un attribut data, permet de spécifier
  // le path json à charger
  init() {
    const animation = lottieWeb.loadAnimation({
      container: document.querySelector('.animation'),
      path: 'assets/lottie/nasa_logo.json',
      renderer: 'svg',
      loop: true,
      autoplay: true,
      name: 'Demo Animation',
    });

    LottieInteractivity.create({
      player: '#firstLottie',
      mode: 'scroll',
      actions: [
        {
          visibility: [0, 1],
          type: 'seek',
          frames: [0, 300],
        },
      ],
    });
  }
}
