import { INotification } from './notification.interface';

export interface IObserver {
  readonly name: string;
  update(notification: INotification): void;
}
