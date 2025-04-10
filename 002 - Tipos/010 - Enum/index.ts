enum Mes {
  JAN = "Janeiro",
  FEV = "Fevereiro",
  MAR = "Março",
}

// console.log(Mes.JAN);
// console.log(Mes.JAN);

const pessoa: { nome: string; mesAniversario: string } = {
  nome: "Diego",
  mesAniversario: Mes.MAR,
};

if (pessoa.mesAniversario === Mes.MAR) {
  console.log(pessoa);
}

