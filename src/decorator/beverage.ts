namespace DecoratorPattern {
  abstract class Beverage {
    public description: string = "Unkonw Beverage";

    abstract cost(): number;

    public getDescription(): string {
      return this.description;
    }
  }

  class DarkRoast extends Beverage {
    cost() {

    }
  }

  abstract class Decorator extends Beverage {
    abstract getDescription(): string;
  }

  class Mocha extends Decorator {
    cost() {

    }

    public getDescription(): string {
      return this.description;
    }
  }

  class Whip extends Decorator {
    cost() {

    }

    public getDescription(): string {
      return this.description;
    }
  }

  class Milk extends Decorator {
    cost() {

    }

    public getDescription(): string {
      return this.description;
    }
  }

  class Soy extends Decorator {
    cost() {

    }

    public getDescription(): string {
      return this.description;
    }
  }
};
