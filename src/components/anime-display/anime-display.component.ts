import { Component, OnInit } from '@angular/core';
import { Anime } from "../../main.interfaces";
import { DataService } from "../../services/data.service";
import { ActivatedRoute } from "@angular/router";
import { first } from "rxjs";

@Component({
  selector: 'app-anime-display',
  templateUrl: './anime-display.component.html',
  styleUrls: ['./anime-display.component.scss']
})
export class AnimeDisplayComponent implements OnInit {
  item?: Anime;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params
      .pipe(first())
      .subscribe(params => {
        this.item = this.dataService.getAnimeById(params['id'])
      })
  }
  joinGenre(items?: string[]): string {
    return items?.join(', ') || '';
  }

}
