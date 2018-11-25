import { Duck } from "./duck";
import { Quack } from "./quack/quack";
import { FlyWithWings } from "./fly/fly-with-wings";

class MallardDuck extends Duck {
  constructor() {
    super();
    //此处依赖性过强
    this.quackBehavior = new Quack();
    this.flyBehavior = new FlyWithWings();
  }

  public display() {
    console.log('我是一只绿头鸭子');
  }
}

export {
  MallardDuck
};

let md = new MallardDuck();
md.performFly();
