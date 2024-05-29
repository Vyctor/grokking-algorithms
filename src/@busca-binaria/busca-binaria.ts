import { length } from "assert";

export class BuscaBinaria {
  public buscaIterativa(lista: Array<number>, valorBuscado: number): number {
    const resultadoAntecipado = this.tratarCasosEspecificos(
      lista,
      valorBuscado
    );

    if (resultadoAntecipado !== null) return resultadoAntecipado;

    let inicio = 0;
    let fim = lista.length - 1;

    while (inicio <= fim) {
      const meio = Math.floor((inicio + fim) / 2);
      const valorMeio = lista[meio];
      if (valorMeio === valorBuscado) {
        return meio;
      } else if (valorMeio < valorBuscado) {
        inicio = meio + 1;
      } else {
        fim = meio - 1;
      }
    }
    return -1;
  }

  public buscarRecursiva(lista: Array<number>, valorBuscado: number): number {
    const resultadoAntecipado = this.tratarCasosEspecificos(
      lista,
      valorBuscado
    );

    if (resultadoAntecipado !== null) return resultadoAntecipado;

    let inicio = 0;
    let fim = lista.length - 1;
    const meio = Math.floor((inicio + fim) / 2);
    const valorMeio = lista[meio];

    if (valorMeio === valorBuscado) {
      return valorMeio;
    } else if (valorMeio < valorBuscado) {
      const novaLista = lista.slice(meio, fim);
      return this.buscarRecursiva(novaLista, valorBuscado);
    } else if (valorMeio > valorBuscado) {
      const novaLista = lista.slice(inicio, meio);
      return this.buscarRecursiva(novaLista, valorBuscado);
    } else {
      return -1;
    }
  }

  private tratarCasosEspecificos(
    lista: Array<number>,
    valorBuscado: number
  ): number | null {
    if (
      lista.length <= 0 ||
      lista[0] > valorBuscado ||
      lista[lista.length - 1] < valorBuscado
    ) {
      return -1;
    }
    if (lista[0] === valorBuscado) return 0;
    if (lista[lista.length - 1] === valorBuscado) return lista.length - 1;

    return null;
  }
}
