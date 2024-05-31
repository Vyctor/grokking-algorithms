package busca_binaria

func BuscaBinariaIterativa(lista []int, valorBuscado int) int {
	var inicio = 0
	var fim = len(lista) - 1

	if valorBuscado < lista[inicio] || valorBuscado > lista[fim] || len(lista) <= 0 {
		return -1
	}

	for inicio <= fim {
		var meio = (inicio + fim) / 2
		var valorMeio = lista[meio]

		if valorMeio == valorBuscado {
			return meio
		} else if valorMeio < valorBuscado {
			inicio = meio + 1
		} else {
			fim = meio - 1
		}
	}
	return -1
}

func BuscaBinariaRecursiva(lista []int, valorBuscado int) int {
	var inicio = 0
	var fim = len(lista) - 1
	var meio = (inicio + fim) / 2
	var valorMeio = lista[meio]

	if valorMeio == valorBuscado {
		return valorMeio
	} else if valorMeio < valorBuscado {
		return BuscaBinariaRecursiva(lista[meio+1:], valorBuscado)
	} else if valorMeio > valorBuscado {
		return BuscaBinariaRecursiva(lista[:meio], valorBuscado)
	} else {
		return -1
	}
}
