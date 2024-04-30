import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {faLock} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {NgForOf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-the-book-profile',
  standalone: true,
  imports: [MatCardModule,
    FontAwesomeModule, NgOptimizedImage, NgForOf],
  templateUrl: './the-book-profile.component.html',
  styleUrl: './the-book-profile.component.css'
})
export class TheBookProfileComponent {
  faArrowRight = faArrowRight;
  faEye = faEye;
  faLock = faLock;
  faHeart = faHeart;

  books=[
    {cover:'https://m.media-amazon.com/images/I/81mUJVc1MkL._AC_UF1000,1000_QL80_DpWeblab_.jpg',
      title:'Boulevard',
      authors:'Flor M. Salvador / MMIvens',
      summary:'¿Quién dijo que después de la tormenta sale el sol cuando puede haber un rayo? Vuelve el fenómeno literario demayor éxito de los últimos tiempos en una edición revisada por la autora. Luke Howland, lleno de problemas y' +
        'sumido en una desesperación profunda, y Hasley Weigel, tan despistada como optimista, no se ajustan al prototipo' +
        '        de pareja perfecta. Como si cada uno fuese un cielo uno es tormenta y el otro un día soleado: él es oscuridad.' +
        '        Ella un rayo de sol. Y, sin embargo, juntos deciden ponerle nombre a lo que habían creado: un boulevard teñido' +
        '        de tonos grisáceos, celestes y azules eléctricos preparándose para la tormenta. Ella era para él y él era para' +
        '        ella. Una historia de amor tan única que te marcará para el resto de tus días.',
      views:'33 M',
      likes:'15 M',
      chapters: 10,
    }
  ]

  getChapters(totalChapters: number): number[] {
    const chapterNumbers: number[] = [];
    for (let i = 1; i <= totalChapters; i++) {
      chapterNumbers.push(i);
    }
    return chapterNumbers;
  }

}
