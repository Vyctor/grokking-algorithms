package selection_sort

func SelectionSort(list []int, order string) []int {
	if order == "asc" {
		println("Ordenando em ordem crescente")
		for i := 0; i < len(list); i++ {
			for j := 0; j < len(list); j++ {
				if list[i] < list[j] {
					var temp = list[i]
					list[i] = list[j]
					list[j] = temp
				}
			}
		}
		return list
	} else {
		println("Ordenando em ordem decrescente")
		for i := 0; i < len(list); i++ {
			for j := 0; j < len(list); j++ {
				if list[i] > list[j] {
					var temp = list[i]
					list[i] = list[j]
					list[j] = temp
				}
			}
		}
		return list
	}
}
