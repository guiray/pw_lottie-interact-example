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