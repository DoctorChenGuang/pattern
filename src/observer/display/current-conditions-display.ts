namespace ObserverPattern {
  export class CurrentConditionsDisplay implements Observer, Display {
    private _weatherData: Subject;

    private _temp!: number;
    private _humidity!: number;
    private _pressure!: Pressure;

    constructor(weatherData: Subject) {
      this._weatherData = weatherData;
      this._weatherData.addObserver(Symbol('CurrentConditionsDisplay'), this);
    }

    public update(obs: Subject): void {
      // 此处处理的还是有问题
      if (obs instanceof WeatherData) {
        this._temp = obs.temp;
        this._humidity = obs.humidity;
        this._pressure = obs.pressure;
        this.display();
      }
    }

    public display(): void {
      console.log(`我是目前状况面板：温度是：${this._temp},湿度是：${this._humidity}, 压强${this._pressure}`);
    }
  }
};
