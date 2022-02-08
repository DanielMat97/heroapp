import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit{
  messages: Array<string> = [];
  
  constructor(private messagesService: MessagesService) {}

  ngOnInit(){
    this.messagesService.getMessage().subscribe(result => {
      this.messages = result;
    });
  }

  clearMessages(){
    this.messagesService.clear();
  }
}
