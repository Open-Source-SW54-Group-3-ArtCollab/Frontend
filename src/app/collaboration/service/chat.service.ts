import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environtments/environment";

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {

  }
  sendChatMessage(data: any) {
      return this.http.post(this.baseUrl+'/collaboration', data);
  }
  getMessages() {
      return this.http.get(this.baseUrl + '/collaboration');
  }
}
