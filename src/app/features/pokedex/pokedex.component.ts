import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  pokemons: any[] = [
    {
      nome: "Bulbasaur",
      imagem: "assets/img/logo.svg",
      descricao: "Um Pokémon planta com uma semente em suas costas.",
    },
    {
      nome: "Charmander",
      imagem: "assets/img/logo.svg",
      descricao: "Um Pokémon lagarto com uma chama em sua cauda. Um Pokémon lagarto com uma chama em sua cauda. Um Pokémon lagarto com uma chama em sua cauda. Um Pokémon lagarto com uma chama em sua cauda.Um Pokémon lagarto com uma chama em sua cauda.Um Pokémon lagarto com uma chama em sua cauda.Um Pokémon lagarto com uma chama em sua cauda.Um Pokémon lagarto com uma chama em sua cauda.Um Pokémon lagarto com uma chama em sua cauda.Um Pokémon lagarto com uma chama em sua cauda.Um Pokémon lagarto com uma chama em sua cauda.",
    },
    {
      nome: "Charmander",
      imagem: "assets/img/logo.svg",
      descricao: "Um Pokémon lagarto com uma chama em sua cauda.",
    },
    {
      nome: "Charmander",
      imagem: "assets/img/logo.svg",
      descricao: "Um Pokémon lagarto com uma chama em sua cauda.",
    },
    {
      nome: "Charmander",
      imagem: "https://url-da-imagem-do-charmander.png",
      descricao: "Um Pokémon lagarto com uma chama em sua cauda.",
    },
    {
      nome: "Bulbasaur",
      imagem: "assets/img/logo.svg",
      descricao: "Um Pokémon planta com uma semente em suas costas.",
    },
    {
      nome: "Charmander",
      imagem: "assets/img/logo.svg",
      descricao: "Um Pokémon lagarto com uma chama em sua cauda. Um Pokémon lagarto com uma chama em sua cauda. Um Pokémon lagarto com uma chama em sua cauda. Um Pokémon lagarto com uma chama em sua cauda.Um Pokémon lagarto com uma chama em sua cauda.Um Pokémon lagarto com uma chama em sua cauda.Um Pokémon lagarto com uma chama em sua cauda.Um Pokémon lagarto com uma chama em sua cauda.Um Pokémon lagarto com uma chama em sua cauda.Um Pokémon lagarto com uma chama em sua cauda.Um Pokémon lagarto com uma chama em sua cauda.",
    },
    {
      nome: "Charmander",
      imagem: "assets/img/logo.svg",
      descricao: "Um Pokémon lagarto com uma chama em sua cauda.",
    },
    {
      nome: "Charmander",
      imagem: "assets/img/logo.svg",
      descricao: "Um Pokémon lagarto com uma chama em sua cauda.",
    },
    {
      nome: "Charmander",
      imagem: "https://url-da-imagem-do-charmander.png",
      descricao: "Um Pokémon lagarto com uma chama em sua cauda.",
    },
    {
      nome: "Bulbasaur",
      imagem: "assets/img/logo.svg",
      descricao: "Um Pokémon planta com uma semente em suas costas.",
    },
    {
      nome: "Charmander",
      imagem: "assets/img/logo.svg",
      descricao: "Um Pokémon lagarto com uma chama em sua cauda. Um Pokémon lagarto com uma chama em sua cauda. Um Pokémon lagarto com uma chama em sua cauda. Um Pokémon lagarto com uma chama em sua cauda.Um Pokémon lagarto com uma chama em sua cauda.Um Pokémon lagarto com uma chama em sua cauda.Um Pokémon lagarto com uma chama em sua cauda.Um Pokémon lagarto com uma chama em sua cauda.Um Pokémon lagarto com uma chama em sua cauda.Um Pokémon lagarto com uma chama em sua cauda.Um Pokémon lagarto com uma chama em sua cauda.",
    },
    {
      nome: "Charmander",
      imagem: "assets/img/logo.svg",
      descricao: "Um Pokémon lagarto com uma chama em sua cauda.",
    },
    {
      nome: "Charmander",
      imagem: "assets/img/logo.svg",
      descricao: "Um Pokémon lagarto com uma chama em sua cauda.",
    },
    {
      nome: "Charmander",
      imagem: "https://url-da-imagem-do-charmander.png",
      descricao: "Um Pokémon lagarto com uma chama em sua cauda.",
    },
    {
      nome: "Bulbasaur",
      imagem: "assets/img/logo.svg",
      descricao: "Um Pokémon planta com uma semente em suas costas.",
    },
    {
      nome: "Charmander",
      imagem: "assets/img/logo.svg",
      descricao: "Um Pokémon lagarto com uma chama em sua cauda. Um Pokémon lagarto com uma chama em sua cauda. Um Pokémon lagarto com uma chama em sua cauda. Um Pokémon lagarto com uma chama em sua cauda.Um Pokémon lagarto com uma chama em sua cauda.Um Pokémon lagarto com uma chama em sua cauda.Um Pokémon lagarto com uma chama em sua cauda.Um Pokémon lagarto com uma chama em sua cauda.Um Pokémon lagarto com uma chama em sua cauda.Um Pokémon lagarto com uma chama em sua cauda.Um Pokémon lagarto com uma chama em sua cauda.",
    },
    {
      nome: "Charmander",
      imagem: "assets/img/logo.svg",
      descricao: "Um Pokémon lagarto com uma chama em sua cauda.",
    },
    {
      nome: "Charmander",
      imagem: "assets/img/logo.svg",
      descricao: "Um Pokémon lagarto com uma chama em sua cauda.",
    },
    {
      nome: "Charmander",
      imagem: "https://url-da-imagem-do-charmander.png",
      descricao: "Um Pokémon lagarto com uma chama em sua cauda.",
    },
    // ... outros Pokémon
  ];

  paginaAtual: number = 0; // Página atual
  itensPorPagina: number = 2; // Quantidade de Pokémons por página

  constructor() {

  }

  ngOnInit(): void {

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
    return Math.ceil(this.pokemons.length / this.itensPorPagina);
  }


}
