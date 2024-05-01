import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardImage, MatCardTitle} from "@angular/material/card";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {NgForOf} from "@angular/common";
import {User} from "../../../shared/model/user.entity";
import {UsersService} from "../../../shared/service/users.service";

@Component({
  selector: 'app-the-user-artist',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatCardImage,
    MatGridList,
    MatGridTile,
    NgForOf
  ],
  templateUrl: './the-user-artist.component.html',
  styleUrl: './the-user-artist.component.css'
})
export class TheUserArtistComponent implements OnInit{
  Artists: User[] = [];
  constructor(private artistsService: UsersService) {
  }

  ngOnInit(): void {
    this.artistsService.getAll().subscribe((data: User[]) => {
      this.Artists = data;
    });
  }
}
