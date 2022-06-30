export interface Anime {
  id: string | number,
  name: string,
  startYear: number,
  genre: string[],
  type: string,
  series: number,
  middleSeriesMinuteTime: number,
  producer: string,
  rating: number,
  logo: string,
}
export interface AnimeLink {
  id: string | number,
  name: string;
}
