import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user.entity";
import {environment} from "../../../environtments/environment";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
   baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }
   getAll(){
     return this.http.get(this.baseUrl);
   }
   edit(id:any, name:any){
     return this.http.patch(this.baseUrl +`/${id}`, {firstName:name} )
   }
}
