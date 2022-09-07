import { INotification } from '../interfaces';

export class Notification implements INotification {
  constructor(public name: string, public email: string) {}
}
