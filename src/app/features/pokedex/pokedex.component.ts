import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/core/models/pokemon';
import { PokemonsService } from 'src/app/shared/services/pokemons.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  pokemons: Pokemon[] = [];
  countPokemons: number = 0
  paginaAtual: number = 0; // Página atual
  itensPorPagina: number = 20; // Quantidade de Pokémons por página
  nextPageUrl: string = ''

  constructor(private servicePokemon: PokemonsService) {

  }

  ngOnInit(): void {
    this.servicePokemon.carregarListaPokemons().subscribe({
      next: (listaPokemon) => {
        console.log(listaPokemon)
        this.nextPageUrl = listaPokemon.next
        this.pokemons = listaPokemon.results;
        this.countPokemons = listaPokemon.count

      }
    })
  }

    // Método para avançar para a próxima página
    proximaPagina() {
      const ultimaPagina = Math.ceil(this.pokemons.length / this.itensPorPagina);
      if (this.paginaAtual < ultimaPagina - 1) {
        this.paginaAtual++;
      }
    }

    // Método para voltar para a página anterior
    paginaAnterior() {
      if (this.paginaAtual > 0) {
        this.paginaAtual--;
      }
    }

    // Método para ir para a primeira página
    primeiraPagina() {
      this.paginaAtual = 0;
    }

    // Método para ir para a última página
    ultimaPagina() {
      this.paginaAtual = Math.ceil(this.pokemons.length / this.itensPorPagina) - 1;
    }

      // Método para calcular a última página
  calcularUltimaPagina(): number {
    return Math.ceil(this.countPokemons / this.itensPorPagina);
  }


}
