import { IHouseBuilder } from './interfaces/house-builder.interface';
import { House } from './house.class';
import { EHouseType } from './enums/house-type.enum';
import { EHouseMaterial } from './enums/house-material.enum';

export class HouseBuilder implements IHouseBuilder {
  constructor(public house: House) {
    this.house = new House();
  }

  setHouseDoors(doors: number): this {
    this.house.doors = doors;
    return this;
  }

  setHouseWindows(windows: number): this {
    this.house.windows = windows;
    return this;
  }

  setHouseMaterial(material: EHouseMaterial): this {
    this.house.material = material;
    return this;
  }

  setHouseType(type: EHouseType): this {
    this.house.type = type;
    return this;
  }

  build(): House {
    return this.house;
  }
}
