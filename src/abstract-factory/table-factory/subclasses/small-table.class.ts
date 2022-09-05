import { IDimension } from '../interfaces/dimension.interface';
import { Table } from './table.class';

export class SmallTable extends Table {
  constructor(
    public width: number = 20,
    public height: number = 20,
    public depth: number = 20,
    public name: string = 'Small Table',
  ) {
    super();
  }

  public getDimension(): IDimension {
    return {
      width: this.width,
      height: this.height,
      depth: this.depth,
      name: this.name,
    };
  }
}
