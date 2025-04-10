const error = (): never => {
  throw new Error('Algo deu errado');
};
// console.log(error());

const loop = (): never => {
  while (true) {
    console.log("Olá");
  }
};
// loop();

const validate = (value: any) => {
  if (typeof value === "string") {
    return console.log("É um string");
  } else if (typeof value === "number") {
    return console.log("É um número");
  }

  console.log(error());
};

//validate("D");
//validate(1);
validate({ nome: "Diego" });