import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexComponent } from './pokedex/pokedex.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [
    PokedexComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    PaginatorModule
  ]
})
export class FeaturesModule { }
