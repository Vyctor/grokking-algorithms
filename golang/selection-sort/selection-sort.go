package bubble_sort

func findSmallest(arr []int) int {
	smallest := arr[0]
	smallestIndex := 0
	for i := 1; i < len(arr); i++ {
		if arr[i] < smallest {
			smallest = arr[i]
			smallestIndex = i
		}
	}
	return smallestIndex
}

func SelectionSort(list []int) []int {
	var ordenedList []int = make([]int, 0, len(list)) // Criar slice com capacidade, mas sem elementos inicialmente

	for len(list) > 0 {
		smallest := findSmallest(list)
		ordenedList = append(ordenedList, list[smallest])
		list = append(list[:smallest], list[smallest+1:]...)
	}
	return ordenedList
}
