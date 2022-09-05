import { IDimension } from './dimension.interface';
import { Table } from './table.class';

export class MediumTable extends Table {
  constructor(
    public width: number = 40,
    public height: number = 40,
    public depth: number = 40,
    public name: string = 'Medium Table',
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
