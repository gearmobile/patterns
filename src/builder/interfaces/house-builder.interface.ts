import { House } from '../house.class';
import { EHouseType } from '../enums/house-type.enum';
import { EHouseMaterial } from '../enums/house-material.enum';

export interface IHouseBuilder {
  house: House;
  setHouseDoors(doors: number): this;
  setHouseWindows(windows: number): this;
  setHouseMaterial(material: EHouseMaterial): this;
  setHouseType(type: EHouseType): this;

  build(): House;
}
