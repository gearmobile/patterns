import { IDimension } from './dimension.interface';
import { Table } from './table.class';

export class LargeTable extends Table {
  constructor(
    public width: number = 60,
    public height: number = 60,
    public depth: number = 60,
    public name: string = 'Large Table',
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
