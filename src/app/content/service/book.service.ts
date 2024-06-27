import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environtments/environment";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseUrl:string = environment.baseUrl;


  constructor(private http: HttpClient) {

  }

  getHeaders() {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    };
  }

  getAll(){
    return this.http.get(this.baseUrl + '/templates', { headers: this.getHeaders() });
  }

  getChapters(){
    return this.http.get(this.baseUrl + '/chapters', { headers: this.getHeaders() });
  }

  editChapter(id: number, data: any){
    return this.http.patch(this.baseUrl + '/chapters/' + id, {title: data}, { headers: this.getHeaders() });
  }

  increaseLike(id: number, likes:number){
    return this.http.patch(this.baseUrl + '/templates/' + id , {likes: likes + 1}, { headers: this.getHeaders() });
  }

  createBook(data: any){
    return this.http.post(this.baseUrl + '/templates', data, { headers: this.getHeaders() });
  }

  updateBook(id: number, data: any){
    return this.http.put(this.baseUrl + '/templates/' + id, data, { headers: this.getHeaders() });
  }
}
