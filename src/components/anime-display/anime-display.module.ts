import { NgModule } from "@angular/core";
import { AnimeDisplayComponent } from "./anime-display.component";

@NgModule({
  declarations: [
    AnimeDisplayComponent,
  ],
  exports: [
    AnimeDisplayComponent,
  ]
})
export class AnimeDisplayModule { }
