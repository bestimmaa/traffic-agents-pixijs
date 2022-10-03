export class Car {
  constructor(p, v, a, sprite) {
    // pixel
    this.position = p;
    // Our velocity is measured in pixel / s
    this.velocity = v;
    // Our acceleration is measured in pixel / s^2
    this.acceleration = a;
    // time in sec since simulation start
    this.time = 0.0;
    this.targetVelocity = 500;
  }

  // delta = FPS/60.0 which equals 1.0 for 60 Hz, 2.0 for 30 Hz...
  // TODO: Document a safe frequency for physics calculation, 1 Hz is critical.
  tick(delta) {
    // frameTime is the length of the current frame in seconds
    let frameTime = delta / 60.0;
    // second equation of motion: s=s0+v0*t+a/2*t^2
    this.position =
      this.position +
      this.velocity * frameTime +
      (this.acceleration / 2.0) * Math.pow(frameTime, 2);
    // first equation of motion: v = u+a*t
    this.velocity = this.velocity + this.acceleration * frameTime;
    // if we acclerate into the target speed stop accelerating
    if (Math.abs(this.velocity - this.targetVelocity) < 3)
      this.acceleration = 0;
    this.time += frameTime;

    // add some human imperfections
    // this.log();
  }

  log() {
    console.log(
      "Car\tt=" +
        this.time +
        "\tV=" +
        this.velocity +
        "\tA=" +
        this.acceleration +
        "\tP=" +
        this.position
    );
  }
}
