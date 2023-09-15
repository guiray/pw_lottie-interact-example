import { LottieInteractivity } from '@lottiefiles/lottie-interactivity';
import Lottie from './Lottie';

class Main {
  constructor() {
    this.init();
  }

  init() {
    new Lottie();
    new LottieInteractivity();
  }
}
new Main();
