function fadeOut(a, speed) {
  a.loadPixels();

  for (let j = 0; j < a.height; j++) {
    for (let i = 0; i < a.width; i++) {
      let index = (i + j * a.width) * 4;
      if (speed < 0 && a.pixels[index + 3] > 0) {
        a.pixels[index + 3] = a.pixels[index + 3] + speed;
      }
    }
  }
  a.updatePixels();
}

function fadeIn(a, speed) {
  a.loadPixels();

  for (let j = 0; j < a.height; j++) {
    for (let i = 0; i < a.width; i++) {
      let index = (i + j * a.width) * 4;

      if (speed > 0 && a.pixels[index + 3] < 255) {
        a.pixels[index + 3] = a.pixels[index + 3] + speed;
      }
    }
  }
  a.updatePixels();
}
