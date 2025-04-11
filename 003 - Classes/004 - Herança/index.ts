/*
  public -      Pode ser acessado tanto pela mesma classe, 
                classes filhas e outras classes.
  ##############################################################################
  protected -   Pode ser acessado pela mesma classe e classes filhas, 
                não pode ser acessado por outras classes.
  ##############################################################################
  private -     Pode ser acessada somente pela própria classe.
*/

class Pessoa {
  protected nome: string = "";
  protected idade: number = 0;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  public comer(comida: string) {
    return `O ${this.nome} comeu ${comida}.`;
  }

  public fezAniversario() {
    return `O ${this.nome} fez tantos anos ${++this.idade}`
  }
}

class Diego extends Pessoa {
  private profissao: string = "Programador";
  constructor() {
    super("Diego", 30);
  }

  public getProfissao() {
    return `O ${this.nome} trabalha como ${this.profissao}.`
  }
}

// class Maria extends Pessoa {
//   constructor() {
//     super("Maria", 22);
//   }
// }

//const diego = new Diego("Diego", 30);
const diego = new Diego();
console.log(diego.getProfissao());

//const maria = new Maria();
//const maria = new Maria("Maria", 22);

//console.log(diego);

// console.log(diego.nome);
// console.log(diego.idade);
// console.log(diego.comer("Feijoada"));
// console.log(diego.fezAniversario());


// console.log(maria.nome);
// console.log(maria.idade);
// console.log(maria.comer("Feijoada"));
// console.log(maria.fezAniversario());