import { AbstractProductA, AbstractProductB } from './abstract.interfaces';

// Класс для конкретной фабрики
// Создает конкретный конечный продукт ProductA1
export class ConcreteProductA1 implements AbstractProductA {
  public usefulFunctionA(): string {
    return 'Конечный продукт ProductA1';
  }
}

// Класс для конкретной фабрики
// Создает конкретный конечный продукт ProductA2
export class ConcreteProductA2 implements AbstractProductA {
  public usefulFunctionA(): string {
    return 'Конечный продукт ProductA2';
  }
}

// Класс для конкретной фабрики
// Создает конкретный конечный продукт ProductB1
export class ConcreteProductB1 implements AbstractProductB {
  public usefulFunctionB(): string {
    return 'Конечный продукт ProductB1';
  }
}

// Класс для конкретной фабрики
// Создает конкретный конечный продукт ProductB2
export class ConcreteProductB2 implements AbstractProductB {
  public usefulFunctionB(): string {
    return 'Конечный продукт ProductB2';
  }
}
