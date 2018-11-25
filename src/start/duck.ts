import { QuackBehavior } from "./quack/quack-behavior";
import { FlyBehavior } from "./fly/fly-behavior";

class Duck {
  quackBehavior!: QuackBehavior;
  flyBehavior!: FlyBehavior;
  performQuack() {
    this.quackBehavior.quack();
  }
  performFly() {
    this.flyBehavior.fly();
  }
  swim() { }
  display() { }
}

export {
  Duck
}
