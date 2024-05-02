import { Component } from '@angular/core';
import {MatCard} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'the-artist-room',
  standalone: true,
    imports: [
        MatCard,
        MatIcon
    ],
  templateUrl: './the-artist-room.component.html',
  styleUrl: './the-artist-room.component.css'
})
export class TheArtistRoomComponent {
  room = 'Room';
  chat = 'Chat';
  newchat = 'New Chat';
  text = 'Text';
  deleteroom = 'Delete Room';
}

