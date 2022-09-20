class Auto {
  constructor(doors, color, engine) {}
}

let AutoMix = {
  startEngine() {
    console.log(`Start engine ${this.engine} of the auto`);
  },
};

Object.assign(Auto.prototype, AutoMix);

const auto = new Auto(4, 'white', 'fiat');
auto.startEngine();
