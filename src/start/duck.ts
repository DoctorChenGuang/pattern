import { QuackBehavior } from "./quack/quack-behavior";
import { FlyBehavior } from "./fly/fly-behavior";

abstract class Duck {
  public quackBehavior!: QuackBehavior;
  public flyBehavior!: FlyBehavior;

  public performQuack() {
    this.quackBehavior.quack();
  }

  public performFly() {
    this.flyBehavior.fly();
  }

  public swim() {
    console.log('所有鸭子必备技能，会游泳');
  }

  abstract display(): void;

  public setFlyBehavior(flyBehavior: FlyBehavior): void {
    this.flyBehavior = flyBehavior;
  }

  public setQuackBehavior(quackBehavior: QuackBehavior): void {
    this.quackBehavior = quackBehavior;
  }
}

export {
  Duck
}
