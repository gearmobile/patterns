import { INotification, IObserver, ISubject } from '../interfaces';

export class Subject implements ISubject {
  /**
   * List of observers
   */
  private observers: IObserver[] = [];

  constructor(public notification: INotification) {}

  /**
   * Add new observer to the list of observers
   * @param {IObserver} observer Observer
   */
  public attach(observer: IObserver): void {
    if (this.observers.includes(observer)) {
      return;
    } else {
      this.observers.push(observer);
      console.log(`Observer ${observer.name} was attached`);
    }
  }

  /**
   * Remove observer from the list of observers
   * @param {IObserver} observer Observer
   */
  public detach(observer: IObserver): void {
    const findObserver: boolean = this.observers.includes(observer);
    if (!findObserver) {
      return;
    } else {
      this.observers = this.observers.filter(
        (item: IObserver) => item !== observer,
      );
      console.log(`Observer ${observer.name} was detached`);
    }
  }

  /**
   * Notify each observer from the list of observers
   */
  public notify(): void {
    this.observers.forEach((observer: IObserver) => {
      observer.update(this.notification);
    });
  }
}
