namespace ObserverPattern {
  export class ForecastDisplay implements Observer, Display {
    private _weatherData: Subject;

    private _temp!: number;

    constructor(weatherData: Subject) {
      this._weatherData = weatherData;
      this._weatherData.addObserver(Symbol('ForecastDisplay'), this);
    }

    public update(obs: Subject): void {
      // 此处处理的还是有问题
      if (obs instanceof WeatherData) {
        this._temp = obs.temp;
        this.display();
      }
    }

    public display(): void {
      console.log(`我是气象统计面板：整体温度${this._temp > 30 ? '过高' : '过低'}`);
    }
  }
};
