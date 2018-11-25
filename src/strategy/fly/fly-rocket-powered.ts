import { FlyBehavior } from "./fly-behavior";

class FlyRocketPowered implements FlyBehavior {
  public fly() {
    console.log('我是依赖rocket powered飞行( •̀ ω •́ )✧');
  }
}

export {
  FlyRocketPowered
};
