import { FlyBehavior } from "./fly-behavior";

class FlyNoWay implements FlyBehavior {
  fly() {
    console.log("我有翅膀，但是我不会飞");
  }
}

export {
  FlyNoWay
}