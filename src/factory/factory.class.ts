enum ECar {
    Bmw = 'bmw',
    Fiat = 'fiat'
}

class Car {
    constructor(public doors: number, public color: string, public model: string) {}
}

class FactoryCar {
    createCar(type: string): any {
        switch (type) {
            case ECar.Bmw:
                return new Car(4, 'black', 'x5')
            case ECar.Fiat:
                return new Car(2, 'red', 'civil')
        }
    }
}

const factory = new FactoryCar()
const bmw = factory.createCar(ECar.Bmw);
console.log(bmw)

const fiat = factory.createCar(ECar.Fiat);
console.log(fiat);