import { Component } from '@angular/core';

interface Message {
  id:number;
  content: string;
  timestamp: Date;
}

@Component({
  selector: 'app-message-app',
  templateUrl: './message-app.component.html',
  styleUrls: ['./message-app.component.css']
})
export class MessageAppComponent {

  messages: Message[] = [];
  newMessage: Message = {
    id:0,
    content: '',
    timestamp: new Date()
  };

  sendMessage() {
    if (this.newMessage.content.trim() !== '') {
      this.messages.push({...this.newMessage});
      this.newMessage.content = '';
    }
  }

  deleteMessage(id: number) {
    const index = this.messages.findIndex(message => message.id === id);
    if (index !== -1) {
      this.messages.splice(index, 1);
    }
  }

}
