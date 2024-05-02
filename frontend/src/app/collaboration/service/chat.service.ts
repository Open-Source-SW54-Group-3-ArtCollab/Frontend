import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }
  createChatRoom(data: any) {
      return this.http.post('http://localhost:3000/chatRoom', data);
  }
  getChatRoomById(id: string) {
    return this.http.get('http://localhost:3000/chatRoom/' + id);
  }
  getChat(id:any) {
       return this.http.get('http://localhost:3000/chat/' + id);
  }
  sendChatMessage(data: any) {
      return this.http.post('http://localhost:3000/message', data);
  }
  getMessages() {
      return this.http.get('http://localhost:3000/message/');
  }
}
