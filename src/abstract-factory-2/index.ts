class MiniVan {
  constructor(
    public doors: number,
    public color: string,
    public model: string,
  ) {}
}

class ElectroSamokat {
  constructor(public color: string, public model: string) {}
}

class MiniVanFactory {
  static create(model: string) {
    switch (model) {
      case 'fw':
        return new MiniVan(3, 'white', 'super');
      case 'porshe':
        return new MiniVan(2, 'blue', 'awesome');
    }
  }
}

class ElectroSamokatFactory {
  static create(model: string) {
    switch (model) {
      case 'samsung':
        return new ElectroSamokat('yellow', 'primo');
      case 'xiaomi':
        return new ElectroSamokat('black', 'secondo');
    }
  }
}

class VehicleFactory {
  public create(type: string, model: string) {
    switch (type) {
      case 'car':
        return MiniVanFactory.create(model);
      case 'samokat':
        return ElectroSamokatFactory.create(model);
    }
  }
}

const vehicleFactory = new VehicleFactory();
const porshe = vehicleFactory.create('car', 'porshe');
console.log(porshe);
