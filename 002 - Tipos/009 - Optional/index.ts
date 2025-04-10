const fn = (nome: string, idade?: number) => {
  if (!idade) {
    return `nome: ${nome}, idade: sem valor definido.`;
  }

  return `nome: ${nome}, idade: ${idade}`;
};

console.log(fn("Diego", 30));
console.log(fn("Diego"));

const pessoa: { nome: string; idade?: number } = {nome: "Diego", idade: 30};