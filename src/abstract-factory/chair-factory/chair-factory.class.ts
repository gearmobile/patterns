import { IChair } from './chair.interface';
import { EChairs } from './chairs.enum';
import { SmallChair } from './small-chair.class';
import { MediumChair } from './medium-char.class';
import { LargeChair } from './large-chair.class';

export class ChairFactory {
  static createChair(type: EChairs): IChair {
    switch (type) {
      case EChairs.SmallChair:
        return new SmallChair();
      case EChairs.MediumChair:
        return new MediumChair();
      case EChairs.LargeChair:
        return new LargeChair();
    }
  }
}
