import { INotification, IObserver } from '../interfaces';

export class Observer implements IObserver {
  constructor(public name: string) {}

  public update(notification: INotification): void {
    console.log(
      `${notification.name} notify ${this.name} from email ${notification.email}`,
    );
  }
}
