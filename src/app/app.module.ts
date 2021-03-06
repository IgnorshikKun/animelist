import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { AnimeDisplayModule } from "../components/anime-display/anime-display.module";
import { NotFoundPageModule } from "../components/not-found-page/not-found-page.module";
import { CheckExistGuard } from "../services/check-exist.guard";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    NotFoundPageModule,

    AnimeDisplayModule,
  ],
  providers: [ CheckExistGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
