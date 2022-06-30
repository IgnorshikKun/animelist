import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";
import { AnimeLink } from "../main.interfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  itemLinks?: AnimeLink[];
  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.itemLinks = this.dataService.getAnimeLinkList();
    console.log(this.itemLinks)
  }
}
