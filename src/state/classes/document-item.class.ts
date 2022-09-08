import {
  DocumentItemState,
  DraftDocumentItemState,
} from './document-state.class';

export class DocumentItem {
  private state: DocumentItemState | undefined;
  public text: string | undefined;

  constructor() {
    this.setState(new DraftDocumentItemState());
  }

  public setState(state: DocumentItemState): void {
    this.state = state;
    this.state.setContext(this);
  }

  public getState(): DocumentItemState {
    return <DocumentItemState>this.state;
  }

  public publish(): void {
    this.state?.publish();
  }

  public unpublish(): void {
    this.state?.unpublish();
  }
}
