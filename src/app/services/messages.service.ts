import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messagesObservable = new Subject<Array<string>>();
  messages: Array<string> = [];

  constructor() { }

  add(message: string) {
    this.messages = [...this.messages, message];
    this.messagesObservable.next(this.messages);
  }

  getMessage(){
    return this.messagesObservable.asObservable();
  }

  clear() {
    this.messages = [];
    this.messagesObservable.next(this.messages);
  }
}
