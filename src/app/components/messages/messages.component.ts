import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MessagesPresenter } from './messages.presenter';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MessagesPresenter],
})
export class MessagesComponent {
  get messages(): string[] {
    return this.presenter.messages;
  }
  
  get hasMessages(): boolean {
    return this.presenter.hasMessages;
  }

  @Input() set messages(value: string[]) {
    this.presenter.messages = value;
  }
  
  constructor(private presenter: MessagesPresenter) {}

}
