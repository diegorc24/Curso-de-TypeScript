/*
  Uma classe TypeScript é uma estrutura de programação orientada a objetos 
  que possui um conjunto de propriedades e métodos. 

  A classe é um modelo para criar objetos, permitindo que você defina 
  uma estrutura com propriedades e comportamentos.
*/

class Pessoa {
  // nome: string;
  // idade: number;
  // nome: string = "Diego Rodrigues";
  // idade: number = 31;

  nome: string = "";
  idade: number = 0;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

    // constructor(nome: string, idade: number) {
  //   this.nome = nome;
  //   this.idade = idade;
  // }
}

const pessoa1 = new Pessoa("Diego Rodrigues", 30);
const pessoa2 = new Pessoa("João da Silva", 67);

console.log(pessoa1.nome);
console.log(pessoa1.idade);

console.log(pessoa2.nome);
console.log(pessoa2.idade);

// const pessoa1 = new Pessoa();

// console.log(pessoa1.nome);
// console.log(pessoa1.idade);
