import {
  ConcreteProductA1,
  ConcreteProductA2,
  ConcreteProductB1,
  ConcreteProductB2,
} from './classes-for-fabrics.classes';

import {
  AbstractFactory,
  AbstractProductA,
  AbstractProductB,
} from './abstract.interfaces';

/** Конкретная Фабрика Factory1
/* реализует методы createProductA и createProductB интерфейса AbstractFactory
/* использует классы ConcreteProductA1 и ConcreteProductB1 для создания конкретных продуктов
**/
export class ConcreteFactory1 implements AbstractFactory {
  public createProductA(): AbstractProductA {
    return new ConcreteProductA1();
  }

  public createProductB(): AbstractProductB {
    return new ConcreteProductB1();
  }
}

/** Конкретная Фабрика Factory2
/* реализует методы createProductA и createProductB интерфейса AbstractFactory
/* использует классы ConcreteProductA2 и ConcreteProductB2 для создания конкретных продуктов
**/
export class ConcreteFactory2 implements AbstractFactory {
  public createProductA(): AbstractProductA {
    return new ConcreteProductA2();
  }

  public createProductB(): AbstractProductB {
    return new ConcreteProductB2();
  }
}
