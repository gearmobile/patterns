import { Logger } from './subclasses/logger.class';
import { Notify } from './subclasses/notify.class';
import { Template } from './subclasses/template.class';

export class Facade {
  private logger: Logger;
  private notify: Notify;
  private template: Template;

  constructor() {
    this.logger = new Logger();
    this.notify = new Notify();
    this.template = new Template();
  }

  public send(person: string, template: string) {
    const findTemplate = this.template.getTemplate(template);

    if (!findTemplate) {
      this.logger.logger('Template not found');
      return;
    }

    this.notify.send(findTemplate.template, person);
    this.logger.logger('Template was send');
  }
}
