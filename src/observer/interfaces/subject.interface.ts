import { INotification } from './notification.interface';
import { IObserver } from './observer.interface';

export interface ISubject {
  notification: INotification;
  attach(observer: IObserver): void;
  detach(observer: IObserver): void;
  notify(): void;
}
