import { DocumentItem } from './classes/document-item.class';

const item = new DocumentItem();

item.text = 'Some text';
console.log(item.getState());

item.publish();
console.log(item.getState());

item.unpublish();
console.log(item.getState());
