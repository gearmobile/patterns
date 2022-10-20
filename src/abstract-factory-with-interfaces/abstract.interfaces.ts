// Интерфейс метода createProductA абстрактной фабрики AbstractFactory
export interface AbstractProductA {
  usefulFunctionA(): string;
}

// Интерфейс метода usefulFunctionB абстрактной фабрики AbstractFactory
export interface AbstractProductB {
  usefulFunctionB(): string;
}

// Интерфейс абстрактной фабрики AbstractFactory
export interface AbstractFactory {
  createProductA(): AbstractProductA;
  createProductB(): AbstractProductB;
}
