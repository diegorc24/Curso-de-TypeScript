// tuplas
let array1: [string, string, number, boolean] = [
  "Diego Rodrigues",
  "Teste",
  123,
  false,
];
let array2: Array<string | number | boolean> = [
  true,
  "Diego",
  123,
  "Rodrigues",
];

let obj1: { nome: string; sobrenome: string; idade: number; deuBom: boolean } =
  { nome: "Diego", sobrenome: "Rodrigues", idade: 123, deuBom: true };
let obj2: Array<{
  nome: string;
  sobrenome: string;
  idade: number;
  deuBom: boolean;
}> = [
  { 
    nome: "Diego", 
    sobrenome: "Rodrigues", 
    idade: 123, 
    deuBom: true,
   },

   { 
    nome: "Diego1", 
    sobrenome: "Rodrigues", 
    idade: 123, 
    deuBom: true,
   },

   { 
    nome: "Diego2", 
    sobrenome: "Rodrigues", 
    idade: 456, 
    deuBom: false,
   },
  ];

console.log(array1);
console.log(array2);
console.log(obj1);
console.log(obj2);

