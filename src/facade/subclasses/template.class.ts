import { ITemplate } from '../interfaces/template.inerface';

export class Template {
  private templates: ITemplate[] = [
    { name: 'awesome', template: '<h2>Title</h2>' },
  ];

  public getTemplate(name: string): ITemplate | undefined {
    return this.templates.find((template: ITemplate) => template.name === name);
  }
}
