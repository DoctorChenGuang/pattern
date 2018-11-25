import { FlyBehavior } from "./fly-behavior";

class FlyWithWings implements FlyBehavior {
  fly() {
    console.log('我带有小翅膀，我会飞');
  }
}

export {
  FlyWithWings
}