import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anime-display',
  templateUrl: './anime-display.component.html',
  styleUrls: ['./anime-display.component.scss']
})
export class AnimeDisplayComponent implements OnInit {
  item = {
    header: 'Наруто Ураганные Хроники',
    startYear: 2007,
    genre: 'приключения, боевые искусства, сёнэн',
    type: 'TB',
    length: '500, 25мин',
    producer: 'Датэ Хаято',
    rating: '8.7',
    url: 'https://animevost.org/uploads/posts/2016-06/1464842897_1.jpg',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
