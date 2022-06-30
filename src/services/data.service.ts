import { Injectable } from "@angular/core";
import { Anime, AnimeLink } from "../main.interfaces";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor() { }
  data: Anime[] = [
    {
      id: 1,
      name: 'Наруто Ураганные Хроники',
      startYear: 2007,
      genre: ['приключения', 'боевые искусства', 'сёнэн'],
      type: 'TB',
      producer: 'Датэ Хаято',
      rating: 8.7,
      logo: 'https://animevost.org/uploads/posts/2016-06/1464842897_1.jpg',
      series: 500,
      middleSeriesMinuteTime: 25
    },
    {
      id: 2,
      name: 'Внук мудреца',
      startYear: 2019,
      genre: ['приключения', 'комедия', 'фэнтази'],
      type: 'TB',
      producer: 'Тамура Масафуми',
      rating: 6.8,
      logo: 'https://animevost.org/uploads/posts/2019-04/1554911946_1.jpg',
      series: 12,
      middleSeriesMinuteTime: 25
    },
    {
      id: 3,
      name: 'Форма голоса',
      startYear: 2016,
      genre: ['драма', 'школа'],
      type: 'полнометражный фильм',
      producer: 'Ямада Наоко',
      rating: 7.1,
      logo: 'https://animevost.org/uploads/posts/2017-05/1495046505_1.jpg',
      series: 1,
      middleSeriesMinuteTime: 120
    },
  ]

  getAnimeById(id: string | number): Anime | undefined {
    return this.data.find(i => DataService.convertToString(i.id) === DataService.convertToString(id));
  }

  getAnimeLinkList(): AnimeLink[] {
    return this.data.map(i => {
      return { id: i.id, name: i.name }
    });
  }

  private static convertToString(item: string | number): string {
    return item.toString().toLocaleLowerCase();
  }
}
