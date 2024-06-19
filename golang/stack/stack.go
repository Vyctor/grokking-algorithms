package stack

type Stack[T any] struct {
	elements []T
}

func New[T any]() *Stack[T] {
	return &Stack[T]{}
}

func (s *Stack[T]) Clear() {
	s.elements = []T{}
}

func (s *Stack[T]) Push(e T) {
	s.elements = append(s.elements, e)
}

func (s *Stack[T]) Pop() T {
	if len(s.elements) == 0 {
		var zero T
		return zero
	}
	lastIndex := len(s.elements) - 1
	element := s.elements[lastIndex]
	s.elements = s.elements[:lastIndex]
	return element
}

func (s *Stack[T]) Peek() T {
	if len(s.elements) == 0 {
		var zero T
		return zero
	}
	return s.elements[len(s.elements)-1]
}

func (s *Stack[T]) IsEmpty() bool {
	return len(s.elements) == 0
}

func (s *Stack[T]) Size() int {
	return len(s.elements)
}

func (s *Stack[T]) Print() {
	for i := len(s.elements) - 1; i >= 0; i-- {
		println(s.elements[i])
	}
}
