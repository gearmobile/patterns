class Bird {
  public weight: number | undefined;
  public color: string | undefined;
  public type: string | undefined;
}

class BirdBuilder {
  private bird: Bird = new Bird();

  public setWeight(weight: number): this {
    this.bird.weight = weight;
    return this;
  }

  public setColor(color: string): this {
    this.bird.color = color;
    return this;
  }

  public setType(type: string): this {
    this.bird.type = type;
    return this;
  }

  public create(): Bird {
    return this.bird;
  }
}

const bird: Bird = new BirdBuilder()
  .setType('pigeon')
  .setColor('grey')
  .setWeight(2)
  .create();

console.log(bird);
