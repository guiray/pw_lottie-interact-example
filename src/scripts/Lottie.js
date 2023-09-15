import lottieWeb from 'lottie-web';

export default class Lottie {
  constructor() {
    this.init();
  }

  // Défi: Créer une composante Lottie qui, avec un attribut data, permet de spécifier
  // le path json à charger
  init() {
    const animation = lottieWeb.loadAnimation({
      container: document.querySelector('.animation'),
      path: 'assets/lottie/demo.json',
      renderer: 'svg',
      loop: true,
      autoplay: true,
      name: 'Demo Animation',
    });
  }
}
