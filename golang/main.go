package main

import (
	"fmt"
	"time"

	busca_binaria "github.com/vyctor/grokking-algorithms/golang/busca-binaria"
	busca_linear "github.com/vyctor/grokking-algorithms/golang/busca-linear"
	utils "github.com/vyctor/grokking-algorithms/golang/utils"
)

func main() {
	var startedAt = time.Now()

	var lista = utils.GerarArrayNumerico(10_000_000_000)
	var elapsed = time.Since(startedAt)
	fmt.Printf("Tempo de execução para montagem do dataset: %.5f segundos\n", elapsed.Seconds())
	fmt.Printf("Dataset %d elementos\n", len(lista))

	var valorBuscado = 151_121_121

	startedAt = time.Now()
	var posicao = busca_binaria.BuscaBinariaIterativa(lista, valorBuscado)
	elapsed = time.Since(startedAt)

	fmt.Printf("Busca Binária => Tempo de execução: %.5f segundos\n", elapsed.Seconds())
	if posicao == -1 {
		println("Valor não encontrado na busca binária")
	} else {
		println("Valor encontrado pela busca binária na posição", posicao)
	}

	startedAt = time.Now()
	posicao = busca_linear.BuscaLinear(lista, valorBuscado)
	elapsed = time.Since(startedAt)
	fmt.Printf("Busca linear => Tempo de execução: %.5f segundos\n", elapsed.Seconds())
	if posicao == -1 {
		println("Valor não encontrado na busca linear")
	} else {
		println("Valor encontrado pela busca linear na posição", posicao)
	}

	startedAt = time.Now()
	posicao = busca_binaria.BuscaBinariaRecursiva(lista, valorBuscado)
	elapsed = time.Since(startedAt)
	fmt.Printf("Busca binária recursiva => Tempo de execução: %.5f segundos\n", elapsed.Seconds())
	if posicao == -1 {
		println("Valor não encontrado na busca binária recursiva")
	} else {
		println("Valor encontrado pela busca binária recursiva na posição", posicao)
	}
}
