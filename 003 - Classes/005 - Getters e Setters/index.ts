/*
  Getters e setters são usados para proteger seus dados, 
  especialmente na criação de classes. 
  
  Para cada instância de variável, um método getter retorna seu valor, 
  enquanto um método setter o define ou atualiza.
*/

class Pessoa {
  protected nome: string = "";
  protected idade: number = 0;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  public comer(comida: string) {
    return `O ${this.nome} comeu ${comida}`;
  }

  public fezAniversario() {
    return `O ${this.nome} fez tantos anos ${++this.idade}`;
  }
}

class Diego extends Pessoa {
  private _profissao: string = "Programador";

  constructor() {
    super("Diego", 30);
  }

  get profissao() {
    // Função
    // Validar se contem @ / $
    if (this._profissao === "Piloto de Drone") {
      return `Ele não é mais um programador mudou para ${this._profissao}`;
    }
    return this._profissao;
  }

  set profissao(valor: string) {
    this._profissao = valor;
  }
}

const diego = new Diego();

console.log(diego.profissao);
diego.profissao = "Piloto de Drone";
console.log(diego.profissao);
