import { IHouse } from './interfaces/house.interface';
import { EHouseMaterial } from './enums/house-material.enum';
import { EHouseType } from './enums/house-type.enum';

export class House implements IHouse {
  doors = 0;
  windows = 0;
  material = EHouseMaterial.Brick;
  type = EHouseType.Home;

  public construction(): string {
    return `It\'s ${this.material} house with ${this.windows} windows and ${this.doors} doors`;
  }
}
