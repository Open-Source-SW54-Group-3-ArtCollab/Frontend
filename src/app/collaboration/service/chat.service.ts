import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environtments/environment";

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }
  createChat(data: any) {
      return this.http.post('http://localhost:3000/chat', data);
  }
  getChatRoomById(id:any){
      return this.http.get(this.baseUrl+'/chatRoom/'+id);
  }
  deleteChatRoom(id: any) {
      return this.http.delete('http://localhost:3000/chatRoom/' + id);
  }
  getChat(id:any) {
       return this.http.get(this.baseUrl + '/chat/' + id);
  }
  sendChatMessage(data: any) {
      return this.http.post('http://localhost:3000/message', data);
  }
  getMessages() {
      return this.http.get(this.baseUrl + '/message');
  }
}
