package busca_linear

func BuscaLinear(lista []int, valorBuscado int) int {
	if lista[len(lista)-1] == valorBuscado {
		return len(lista) - 1
	}
	if lista[0] == valorBuscado {
		return 0
	}

	for i, valor := range lista {
		if valor == valorBuscado {
			return i
		}
	}
	return -1
}
