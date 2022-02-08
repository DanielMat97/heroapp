import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DasboardComponent } from './views/dasboard/dasboard.component';
import { DetailsComponent } from './views/details/details.component';
import { HeroesComponent } from './views/heroes/heroes.component';

const routes: Routes = [
  {
    path: 'detail/:id', component: DetailsComponent
  },
  {
    path: 'dashboard', component: DasboardComponent
  },
  {
    path: 'heroes', component: HeroesComponent
  },
  {
    path: '**', redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
