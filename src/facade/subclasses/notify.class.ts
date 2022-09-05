export class Notify {
  public send(template: string, person: string): void {
    console.log(`Send ${template} to ${person}`);
  }
}
