package main

import (
	stack "github.com/vyctor/grokking-algorithms/golang/stack"
	utils "github.com/vyctor/grokking-algorithms/golang/utils"
)

func main() {
	array := utils.GerarArrayNumerosRandomicos(10, 0, 10000)
	stack := stack.New[int]()

	for _, v := range array {
		stack.Push(v)
	}
	stack.Print()
	println("Stack Size: ", stack.Size())
	println("Stack peek: ", stack.Peek())
	println("Stack isEmpty: ", stack.IsEmpty())
	stack.Pop()
	stack.Pop()
	stack.Pop()
	stack.Pop()
	stack.Pop()
	stack.Pop()
	stack.Pop()
	stack.Pop()
	stack.Pop()
	stack.Pop()
	stack.Print()
	println("Stack Size: ", stack.Size())
	println("Stack peek: ", stack.Peek())
	println("Stack isEmpty: ", stack.IsEmpty())
}
