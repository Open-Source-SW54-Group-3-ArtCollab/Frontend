import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environtments/environment";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseUrl:string = environment.baseUrl;
  constructor(private http: HttpClient) { }
  getAll(){
    return this.http.get(this.baseUrl + '/template');
  }
  getChapters(){
    return this.http.get(this.baseUrl + '/chapters');
  }
  editChapter(id: number, data: any){
    return this.http.patch(this.baseUrl + '/chapters/' + id, {title: data});
  }
  increaseLike(id: number, likes:number){
    return this.http.patch(this.baseUrl + '/template/' + id , {likes: likes + 1});
  }
  createBook(data: any){
    return this.http.post(this.baseUrl + '/template', data);
  }
  updateBook(id: number, data: any){
    return this.http.put(this.baseUrl + '/template/' + id, data);
  }
}
