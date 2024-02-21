import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexComponent } from './features/pokedex/pokedex.component';

const routes: Routes = [
  {
    path: '',
    component: PokedexComponent,
    title: 'Pokedex'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
