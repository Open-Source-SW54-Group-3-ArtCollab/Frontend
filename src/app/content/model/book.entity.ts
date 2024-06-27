export class Book {
    title: string;
    description: string;
    date_publish: any;
    type: string;
    id: number;
    imgUrl:string;
    likes: number;
    views:number;
    genre:string;


  constructor(title: string, description: string, date_publish: any, type: string, id: number, imgUrl:string, likes:number, views:number, genre:string) {
    this.title = title;
    this.description = description;
    this.date_publish = date_publish;
    this.type = type;
    this.id = id;
    this.imgUrl = imgUrl;
    this.likes=likes;
    this.views=views;
    this.genre=genre;
  }


}
