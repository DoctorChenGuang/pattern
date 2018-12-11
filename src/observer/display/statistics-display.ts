namespace ObserverPattern {
  export class StatisticsDisplay implements Observer, Display {
    private _weatherData: Subject;

    private _temp!: number;
    private _humidity!: number;

    constructor(weatherData: Subject) {
      this._weatherData = weatherData;
      this._weatherData.addObserver(Symbol('StatisticsDisplay'), this);
    }

    public update(obs: Subject): void {
      // 此处处理的还是有问题
      if (obs instanceof WeatherData) {
        this._temp = obs.temp;
        this._humidity = obs.humidity;
        this.display();
      }
    }

    public display(): void {
      console.log(`我是预报面板：温度是：${this._temp > 30 ? "过高" : "正常"}, 湿度是：${this._humidity > 80 ? "湿度适中" : "湿度过低"},天气适合外出，请做好防晒工作`);
    }
  }
};
