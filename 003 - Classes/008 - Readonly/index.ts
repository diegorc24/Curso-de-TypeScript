class Pessoa {
  // public nome: string = "Diego Rodrigues";
  public readonly nome: string = "Diego Rodrigues";
}

let pessoa = new Pessoa();

console.log(pessoa.nome);
// pessoa.nome = "Mariazinha";
console.log(pessoa.nome);

