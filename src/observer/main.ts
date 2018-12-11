namespace ObserverPattern {
  export enum Pressure {
    UP = '上升',
    Down = '下降'
  }

  class Test {
    public static main(): void {
      let weatherData = new WeatherData();

      new CurrentConditionsDisplay(weatherData);
      new ForecastDisplay(weatherData);
      new StatisticsDisplay(weatherData);

      let temp = 20;
      let humidity = 50;
      let timerInterval = 500;
      let pressure = Pressure.UP;

      let stateIntervalTimer = setInterval(() => {
        weatherData.resetState();
      }, 2000);

      let clearTimer = setInterval(() => {
        temp += 2;
        humidity += 5;
        pressure = temp % 3 === 0 ? Pressure.UP : Pressure.Down;

        weatherData.measurementsChanged(temp, humidity, pressure);
        temp >= 50 && clearInterval(clearTimer) && clearInterval(stateIntervalTimer);
      }, timerInterval);
    }
  }

  Test.main();
};
