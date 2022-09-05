import { ITable } from './table.interface';
import { IDimension } from './dimension.interface';

export class Table implements ITable {
  constructor(
    public width: number = 0,
    public height: number = 0,
    public depth: number = 0,
    public name: string = '',
  ) {}

  public getDimension(): IDimension {
    return {
      width: this.width,
      height: this.height,
      depth: this.depth,
      name: this.name,
    };
  }
}
