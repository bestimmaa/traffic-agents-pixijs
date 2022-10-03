import "./styles.css";
import * as PIXI from "pixi.js";
import { cars } from "./cars.js";
import { randomCarTexture } from "./RandomTextureLoader.js";
const width = 1024.0;

const pixis = () => {
  const app = new PIXI.Application({
    width: width,
    height: width
  });

  document.body.appendChild(app.view);

  // Create sprites for cars from texture
  cars.map((car) => {
    const texture = randomCarTexture();
    const sprite = new PIXI.Sprite(texture);
    sprite.anchor.set(0.5);
    sprite.rotation = Math.PI / 2.0;
    sprite.scale.set(0.2, 0.2);
    car.sprite = sprite;
    app.stage.addChild(sprite);
  });

  let state = play;
  app.ticker.add((delta) => loop(delta));
  app.ticker.maxFPS = 60;
  app.ticker.minFPS = 60;

  function loop(delta) {
    state(delta);
  }

  function play(delta) {
    cars.map((car) => {
      car.tick(delta);
      // Infinite road from top to bottom
      // Clip the right of the screen
      car.sprite.x = car.position % width;
      // Clip the bottom of the screen
      car.sprite.y = (50 + Math.floor(car.position / width) * 100) % width;
    });
  }
};
pixis();
