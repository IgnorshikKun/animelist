import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeDisplayComponent } from "../components/anime-display/anime-display.component";

const routes: Routes = [
  {
    path: 'anime/azaza',
    component: AnimeDisplayComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
