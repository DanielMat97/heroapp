import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DasboardComponent } from './views/dasboard/dasboard.component';
import { HeroesComponent } from './views/heroes/heroes.component';
import { TopHeroesComponent } from './components/top-heroes/top-heroes.component';
import { SearcherComponent } from './components/searcher/searcher.component';

import { InMemoryDataService } from './services/in-memory.service';
import { MessagesComponent } from './components/messages/messages.component';
import { ListHeroesComponent } from './components/list-heroes/list-heroes.component';
import { AddHeroeComponent } from './components/add-heroe/add-heroe.component';
import { DetailsComponent } from './views/details/details.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DasboardComponent,
    HeroesComponent,
    TopHeroesComponent,
    SearcherComponent,
    MessagesComponent,
    ListHeroesComponent,
    AddHeroeComponent,
    DetailsComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
