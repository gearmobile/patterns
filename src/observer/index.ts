import { INotification, IObserver, ISubject } from './interfaces';
import { Notification, Subject, Observer } from './classes';

// init
const notification: INotification = new Notification('John', 'test@test.com');
const subject: ISubject = new Subject(notification);
const obs1: IObserver = new Observer('obs1');
const obs2: IObserver = new Observer('obs2');

// attach observers
subject.attach(obs1);
subject.attach(obs2);

// notify all observers
subject.notify();

// detach observer
subject.detach(obs1);

// notify all observers
subject.notify();
