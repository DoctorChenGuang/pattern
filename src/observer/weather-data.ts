interface Observer {
  update(temp: number, humidity: number, pressure: string): void;
}

interface DisplayElement {
  display(): void;
}

interface Subject {
  registerObserver(ob: Observer): void;
  removeObserver(ob: Observer): void;
  notifyObserver(temp: number, humidity: number, pressure: string): void;
}

class WeatherData implements Subject {
  private observers: Set<Observer> = new Set();

  public temp!: number;
  public humidity!: number;
  public pressure!: string;

  public measurementsChanged(temp, humidity, pressure): void {
    this.temp = temp;
    this.humidity = humidity;
    this.pressure = pressure;

    this.notifyObserver(temp, humidity, pressure);
  }

  public registerObserver(ob: Observer): void {
    this.observers.add(ob);
  }

  public removeObserver(ob: Observer): void {
    this.observers.delete(ob);
  }

  public notifyObserver(temp, humidity, pressure): void {
    this.observers.forEach((ob) => {
      ob.update(temp, humidity, pressure);
    });
  }
}

class CurrentConditiosDisplay implements DisplayElement, Observer {
  private weatherData: Subject;

  private humidity!: number;
  private temp!: number;

  constructor(weatherData: Subject) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  public update(temp: number, humidity: number, pressure: string): void {
    this.temp = temp;
    this.humidity = humidity;
    this.display();  // 此函数并不是很适合在此处调用
  }

  public display(): void {
    console.log(`温度是：${this.temp},湿度是：${this.humidity}`);
  }
}


export {
  WeatherData,
  CurrentConditiosDisplay
}