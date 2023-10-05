import '@lottiefiles/lottie-player';
import { create } from '@lottiefiles/lottie-interactivity';

export default class Lottie {
  constructor() {
    this.init();
  }

  init() {

    document.querySelector('#monLottieInteractif').addEventListener("load", ()=>{
      console.log("allo")
      create({
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
    })
  }
}
