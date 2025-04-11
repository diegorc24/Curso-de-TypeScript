/*
 As interfaces TypeScript definem os contratos em seu código. 
 Eles também fornecem nomes explícitos para verificação de tipo.
*/

interface IPessoa {
  nome: string;
  idade: number;
  readonly cpf: number;
  enabled(): boolean;
}

//const pessoa: { nome: string, idade: number } = {nome: "Diego", idade: 30};
let pessoa: IPessoa = {nome: "Diego", idade: 30, cpf: 12345678901, enabled: () =>{ return true },}; 
//pessoa.cpf = 2222;
//pessoa.idade = 2222;

class Joao implements IPessoa {
  nome: string = "Joao";
  idade: number = 22;

  readonly cpf: number = 12345678901;

  enabled(): boolean {
      return true;
  }
}

class Maria implements IPessoa {
  nome: string = "Maria";
  idade: number = 16;

  readonly cpf: number = 12345678901;

  enabled(): boolean {
      return false;
  }
}