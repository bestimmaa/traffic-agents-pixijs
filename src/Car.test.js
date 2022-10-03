import { Car } from "./Car.js";

test("Car constructor is setting p, v, a and time to 0", () => {
  expect(new Car(1, 2, 3).position).toBe(1);
  expect(new Car(1, 2, 3).velocity).toBe(2);
  expect(new Car(1, 2, 3).acceleration).toBe(3);
  expect(new Car(1, 2, 3).time).toBe(0);
});

test("Car accelerating from 0 with 5 pixel / second^2 should reach 5 pixel / second after 1 second and not be stationary", () => {
  let a = new Car(0, 0, 5);
  a.tick(60);
  expect(a.velocity).toBeCloseTo(5.0);
  expect(a.acceleration).toBeCloseTo(5.0);
  expect(a.position).toBeCloseTo(2.5);
  expect(a.time).toBeCloseTo(1);
});

test("Car deaccelerating from 5 pixel/s with 5 pixel / second^2 should reach 0 pixel / second after 1 second and be stationary", () => {
  let a = new Car(0, 5, -5);
  a.tick(60);
  expect(a.velocity).toBeCloseTo(0.0);
  expect(a.acceleration).toBeCloseTo(-5.0);
  expect(a.position).toBeCloseTo(2.5);
  expect(a.time).toBeCloseTo(1);
});

test("Car stays below target speed", () => {
  let a = new Car(0, 0, 15);
  a.targetVelocity = 100;
  // 500 seconds of ticks at 2 tick / s
  for (var i = 0; i < 500; i++) {
    a.tick(30);
  }
  expect(a.velocity).toBeLessThanOrEqual(100);
});
