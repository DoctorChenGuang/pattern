import { QuackBehavior } from "./quack-behavior";

class MuteQuack implements QuackBehavior {
  quack() {
    console.log("我不会叫");
  }
}

export {
  MuteQuack
}