export class BuscaSequencial {
  buscar(lista: Array<number>, valorBuscado: number): number {
    if (
      lista.length <= 0 ||
      lista[0] > valorBuscado ||
      lista[lista.length - 1] < valorBuscado
    ) {
      return -1;
    }

    if (lista[0] === valorBuscado) return 0;
    if (lista[lista.length - 1] === valorBuscado) return lista.length - 1;

    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === valorBuscado) {
        return i;
      }
    }
    return -1;
  }
}
