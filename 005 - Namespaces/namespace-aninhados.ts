/*
 Os Namespaces são uma forma específica do TypeScript para organizar código. 
 Namespaces são simplesmente objetos JavaScript nomeados no namespace global. 
 Isso torna os namespaces uma construção muito simples de usar.
*/

import { Pessoa1 } from "./pessoa-1";

 export namespace Pessoa {
  export namespace Maria {
    const data = 1 + 1;

    export let nome = "Maria";
    export const calc = () => {
      return data;
    };
  }

  export namespace Joao {
    const data = 1 + 1;

    export let nome = "Joao";
    export const calc = () => {
      return data;
    };
  }
}

// console.log(Pessoa.Joao.nome);
// console.log(Pessoa.Maria.nome);