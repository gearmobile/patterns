import { ITable } from './table.interface';
import { ETables } from './tables.enum';

import { SmallTable } from './small-table.class';
import { MediumTable } from './medium-table.class';
import { LargeTable } from './large-table.class';

export class TableFactory {
  static createTable(type: ETables): ITable {
    switch (type) {
      case ETables.SmallTable:
        return new SmallTable();
      case ETables.MediumTable:
        return new MediumTable();
      case ETables.LargeTable:
        return new LargeTable();
    }
  }
}
