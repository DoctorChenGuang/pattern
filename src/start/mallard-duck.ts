import { Duck } from "./duck";
import { Quack } from "./quack/quack";
import { FlyWithWings } from "./fly/fly-with-wings";

class MallardDuck extends Duck {
  constructor() {
    super();
    this.quackBehavior = new Quack();
    this.flyBehavior = new FlyWithWings();
  }
}

export {
  MallardDuck
};

let md = new MallardDuck();
md.performFly();
