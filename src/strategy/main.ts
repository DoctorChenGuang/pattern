import { MallardDuck } from "./mallard-duck";
import { ModelDuck } from "./model-duck";
import { FlyRocketPowered } from "./fly/fly-rocket-powered";

class Test {
  public static main(): void {
    let md = new MallardDuck();
    md.performFly();

    let modelDuck = new ModelDuck();
    modelDuck.performFly();
    modelDuck.setFlyBehavior(new FlyRocketPowered);
    modelDuck.performFly();
  }
}

Test.main();
