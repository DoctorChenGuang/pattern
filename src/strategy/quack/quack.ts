import { QuackBehavior } from "./quack-behavior";

class Quack implements QuackBehavior {
  quack() {
    console.log('我会呱呱叫');
  }
}

export {
  Quack
}