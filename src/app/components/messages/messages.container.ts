import { Component } from '@angular/core';

import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
})
export class MessagesContainerComponent {
  get messages(): Array<string> {
    return this.messageService.messages;
  }

  constructor(private messageService: MessagesService) {}

  clearMessages(): void {
    this.messageService.clear();
  }
}
