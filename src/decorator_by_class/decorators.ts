import { IComponent } from './interface.interface';

// Базовый класс декоратора
class Decorator implements IComponent {
  protected component: IComponent;

  constructor(component: IComponent) {
    this.component = component;
  }

  public operation(): string {
    return this.component.operation();
  }
}

// Класс DecoratorA
export class DecoratorA extends Decorator {
  public operation(): string {
    return `DecoratorA(${super.operation()})`;
  }
}

// Класс DecoratorB
export class DecoratorB extends Decorator {
  public operation(): string {
    return `DecoratorB(${super.operation()})`;
  }
}
