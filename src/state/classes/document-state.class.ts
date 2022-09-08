import { DocumentState } from '../enums/states';
import { DocumentItem } from './document-item.class';

/**
 * Here we describe state of document
 */
export abstract class DocumentItemState {
  public nameState: string | undefined;
  public item: DocumentItem | undefined;

  public setContext(item: DocumentItem): void {
    this.item = item;
  }

  public abstract publish(): void;
  public abstract unpublish(): void;
}

/**
 * Here we define Draft state of document
 */
export class DraftDocumentItemState extends DocumentItemState {
  constructor() {
    super();
    this.nameState = DocumentState.DraftDocument;
  }

  public publish(): void {
    this.item!.setState(new PublishDocumentItemState());
    console.log(`Document published with text ${this.item!.text}`);
  }

  public unpublish(): void {
    console.log(`Document unpublished`);
  }
}

/**
 * Here we define publish state od document
 */
export class PublishDocumentItemState extends DocumentItemState {
  constructor() {
    super();
    this.nameState = DocumentState.PublishDocument;
  }

  public publish(): void {
    console.log(`Document already published`);
  }

  public unpublish(): void {
    this.item!.setState(new DraftDocumentItemState());
    console.log(`Document was moved to draft with text ${this.item!.text}`);
  }
}
