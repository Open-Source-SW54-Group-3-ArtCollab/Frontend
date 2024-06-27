import {Component, OnInit} from '@angular/core';
import {MatCard} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {ChatService} from "../../service/chat.service";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {UsersService} from "../../../shared/service/users.service";
import {User} from "../../../shared/model/user.entity";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'the-artist-room',
  standalone: true,
    imports: [
        MatCard,
        MatIcon,
        NgOptimizedImage,
        RouterLink,
        NgIf
    ],
  templateUrl: './the-artist-room.component.html',
  styleUrl: './the-artist-room.component.css'
})
export class TheArtistRoomComponent implements OnInit {
   artistData:any;
   writerData:any;
   currentChatRoom:any;

  constructor(private userService:UsersService, private chatService:ChatService) { }
  ngOnInit(): void {
      this.getArtist();
      this.getWriter();
  }
  getArtist(){
      this.userService.getAll().subscribe((data:any)=>{
           data.forEach((user:any)=>{
               if(user.type==='artist' && user.name === 'Miriam Bonastre'){
                    this.artistData = new User( user.id,user.name, user.email, user.type,user.subscription_id, user.imgUrl, user.password, user.username);
               }
           });
      });
  }
  getWriter(){
       this.userService.getAll().subscribe((data:any)=>{
            data.forEach((user:any)=>{
                if(user.type==='writer' && user.name === 'Flor Salvador'){
                  this.writerData = new User( user.id,user.name, user.email, user.type,user.subscription_id, user.imgUrl, user.password, user.username);
                }
            });
       });
  }

  createChat(){
     this.chatService.createChat({ chatRoom_id:1,title:'New Chat',created_date:'2024-05-02'}).subscribe((data:any)=>{});
  }



}

