import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeDisplayComponent } from "../components/anime-display/anime-display.component";
import { NotFoundPageComponent } from "../components/not-found-page/not-found-page.component";
import { CheckExistGuard } from "../services/check-exist.guard";

const routes: Routes = [
  {path: 'anime/:id', component: AnimeDisplayComponent, canActivate: [CheckExistGuard] },
  {path: '**', component: NotFoundPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
