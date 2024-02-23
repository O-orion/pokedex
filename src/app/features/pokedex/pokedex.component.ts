import { AfterViewInit, Component, ElementRef, HostListener, NgZone, OnInit, Renderer2 } from '@angular/core';
import { Pokemon } from 'src/app/core/models/pokemon';
import { PokemonsService } from 'src/app/shared/services/pokemons.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit, AfterViewInit {

  termoPesquisa: string = '';

  pokemons: Pokemon[] = [];
  pokemonsPesquisa: Pokemon[] = []

  countPokemons: number = 0
  paginaAtual: number = 0; // Página atual
  itensPorPagina: number = 20; // Quantidade de Pokémons por página
  nextPageUrl: string = ''

  constructor(private servicePokemon: PokemonsService, private elementRef: ElementRef, private renderer: Renderer2, private zone: NgZone) {

  }

  ngOnInit(): void {
    this.carregarPokemons();
  }

  ngAfterViewInit(): void {


    window.onload = () => {
      this.ajustarAlturaBarraLateral()

    }

  }

  carregarPokemons(): void {
    this.servicePokemon.carregarListaPokemons().subscribe({
      next: (listaPokemon) => {
        this.nextPageUrl = listaPokemon.next
        this.pokemons = listaPokemon.results;
        this.countPokemons = listaPokemon.count

      }
    })
  }

  filtrarItens() {
    if (this.termoPesquisa.trim() === '') {
      this.carregarPokemons();
    } else {
      this.pokemons  = this.pokemons.filter(pokemon => pokemon.name.toLowerCase().startsWith(this.termoPesquisa.toLowerCase()))
    }
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

  // Ajustando tamanho da barra lateral
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.ajustarAlturaBarraLateral();
  }

  private ajustarAlturaBarraLateral() {
    const barraLateral = this.elementRef.nativeElement.querySelector('.barra-lateral');
    const alturaPagina = Math.max(document.body.scrollHeight, document.body.offsetHeight,
      document.documentElement.clientHeight, document.documentElement.scrollHeight,
      document.documentElement.offsetHeight);

    if (barraLateral) {
      this.renderer.setStyle(barraLateral, 'height', `${alturaPagina}px`);
    }
  }


}
