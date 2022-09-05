import { IHouseBuilder } from './interfaces/house-builder.interface';
import { HouseBuilder } from './house-builder.class';
import { House } from './house.class';
import { EHouseType } from './enums/house-type.enum';
import { EHouseMaterial } from './enums/house-material.enum';
import { IHouse } from './interfaces/house.interface';
import { FanzaDirector } from './directors/fanza.director';

// use builder to create object
const houseBuilder: IHouseBuilder = new HouseBuilder(new House());

const office: IHouse = houseBuilder
  .setHouseType(EHouseType.Office)
  .setHouseMaterial(EHouseMaterial.Concrete)
  .setHouseWindows(100)
  .setHouseDoors(4)
  .build();

// use director to create object
const fanza: IHouse = FanzaDirector.create();

console.log(office); // => builder
console.log(fanza); // => director
