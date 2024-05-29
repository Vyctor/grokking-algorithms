import { BuscaBinaria } from "./@busca-binaria/busca-binaria";
import { BuscaSequencial } from "./@busca-sequencial/busca-sequencial";
import { GenerateArrays } from "./@utils/generate-arrays";

const list = GenerateArrays.GenerateOrdenedNumbersArray(100_000_000);
const buscaBinaria = new BuscaBinaria();
const buscaSequencial = new BuscaSequencial();

const valorBuscado = 29;

console.time("binary-search");
let posicao = buscaBinaria.buscaIterativa(list, valorBuscado);
console.timeEnd("binary-search");
console.log(
  `O número ${valorBuscado} está na posição ${posicao}? ${list[posicao]}`
);

console.time("recursive-binary-search");
const valorEncontrado = buscaBinaria.buscarRecursiva(list, valorBuscado);
console.timeEnd("recursive-binary-search");
console.log(`O número ${valorBuscado} foi encontrado? ${valorEncontrado}`);

console.time("sequential-search");
posicao = buscaSequencial.buscar(list, valorBuscado);
console.timeEnd("sequential-search");
console.log(
  `O número ${valorBuscado} está na posição ${posicao}? ${list[posicao]}`
);
