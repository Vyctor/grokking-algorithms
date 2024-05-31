package utils

func GerarArrayNumerico(tamanho int) []int {
	var lista = make([]int, tamanho)
	for i := 0; i < tamanho; i++ {
		lista[i] = i
	}
	return lista
}
