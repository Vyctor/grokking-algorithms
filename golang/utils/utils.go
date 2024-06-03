package utils

import (
	"math/rand"
)

func GerarArrayNumerico(tamanho int) []int {
	var lista = make([]int, tamanho)
	for i := 0; i < tamanho; i++ {
		lista[i] = i
	}
	return lista
}

func GerarArrayNumerosRandomicos(length int, min int, max int) []int {
	result := make([]int, length)
	for i := range result {
		result[i] = rand.Intn(max-min+1) + min
	}
	return result
}
