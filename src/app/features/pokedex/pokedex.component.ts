import { Component } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent {

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

  paginaAtual = 0;
  total = 120

  mudarPagina(event: any) {
    this.paginaAtual = event.page;
  }
}
