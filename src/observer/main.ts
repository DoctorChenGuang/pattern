import { WeatherData, CurrentConditiosDisplay } from "./weather-data";

class Test {
  public static main(): void {
    let wd: WeatherData = new WeatherData();
    //注册的位置
    let ccd = new CurrentConditiosDisplay(wd);

    let count = 0;
    let clearTimer = setInterval(() => {
      count++;
      wd.measurementsChanged(count, count + 50, '上升');
      count >= 3 && clearInterval(clearTimer);
    }, 2000);

  }
}

Test.main();