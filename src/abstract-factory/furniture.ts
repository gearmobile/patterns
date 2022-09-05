import { FurnitureFactory } from './furniture-factory.class';
import { EChairs } from './chair-factory/enums/chairs.enum';
import { ETables } from './table-factory/enums/tables.enum';

const smallChair = FurnitureFactory.createFurniture(EChairs.SmallChair);
console.log(smallChair?.getDimension());

const largeTable = FurnitureFactory.createFurniture(ETables.LargeTable);
console.log(largeTable?.getDimension());

const mediumChair = FurnitureFactory.createFurniture(EChairs.MediumChair);
console.log(mediumChair?.getDimension());
