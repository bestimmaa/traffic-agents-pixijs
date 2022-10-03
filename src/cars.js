import { Car } from "./Car.js";
import { getRandomIntInclusive } from "./MathHelper.js";

let cars = Array.from(
  { length: 10 },
  (item, index) =>
    new Car(
      getRandomIntInclusive(0, 10240),
      getRandomIntInclusive(0, 20),
      getRandomIntInclusive(1, 90)
    )
);
export { cars };
