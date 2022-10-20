import { IComponent } from './interface.interface';

// Простой класс SimpleComponent, реализующий интерфейс IComponent
export class SimpleComponent implements IComponent {
  public operation(): string {
    return 'Простой класс SimpleComponent';
  }
}
