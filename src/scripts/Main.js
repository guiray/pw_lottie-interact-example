import Lottie from './Lottie';
import LottiePlayer from './LottiePlayer';
import { LottieInteractivity } from '@lottiefiles/lottie-interactivity';

class Main {
  constructor() {
    this.init();
  }

  init() {
    new Lottie();
    new LottiePlayer();
    new LottieInteractivity();
  }
}
new Main();
