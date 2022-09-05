import { ITable } from '../interfaces/table.interface';
import { IDimension } from '../interfaces/dimension.interface';

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
