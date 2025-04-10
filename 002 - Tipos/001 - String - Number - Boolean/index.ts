let pedido: string = "Pizza";
pedido = "Diego Rodrigues";

let numero: number = 123;
numero = 321;

let deuBom: boolean = false;
deuBom = true;

// const fun = (value) => {
//   return console.log(value);
// };

// const fun = (value: string) => {
//   return console.log(value);
// };

const fun = (value: string): string => {
  return value;
};

// fun("Diego Rodrigues");
// fun(123);
console.log(fun("Diego Rodrigues 1234"));
