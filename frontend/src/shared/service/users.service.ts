import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
   baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }
   getAll(){
     return this.http.get(this.baseUrl+'/reader');
   }
   edit(id:any, name:any){
     return this.http.patch(this.baseUrl+ '/reader'+`/${id}`, {firstName:name} )
   }
}
