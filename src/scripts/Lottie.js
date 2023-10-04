import LottieWeb from "lottie-web";
import { Create } from "@lottiefiles/lottie-interactivity";

export default class Lottie {
  constructor() {
    this.init();
  }

  init() {
    // const animation = LottieWeb.loadAnimation({
    //   container: this.element,
    //   name: 'lottie-webjam',
    //   renderer: 'svg',
    //   loop: true,
    //   autoplay: true,
    //   path: 'assets/lottie/nasa_logo.json',
    // });

    LottieInteractivity.create({
      player: '#monLottieInteractif',
      mode: 'cursor',
      actions: [
        {
            position: { x: [0, 1], y: [-1, 2] },
            type: 'seek',
            frames: [0, 180],
        }
      ]
    });

  }
}
