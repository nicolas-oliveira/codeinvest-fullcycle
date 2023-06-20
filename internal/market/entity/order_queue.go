package entity

type OrderQueue struct {
	Orders []*Order
}

// Método Less, compara dois valores e diz qual o menor
func (oq *OrderQueue) Less(i, j int) bool {
	return oq.Orders[i].Price < oq.Orders[j].Price
}

// Método Swap, inverte os dados
func (oq *OrderQueue) Swap(i, j int) {
	oq.Orders[i], oq.Orders[j] = oq.Orders[j], oq.Orders[i]
}

// Método Len, verifica o tamanho dos dados
func (oq *OrderQueue) Len() int {
	return len(oq.Orders)
}

// Método push, adiciona novos ao array dinâmico
func (oq *OrderQueue) Push(x any) {
	oq.Orders = append(oq.Orders, x.(*Order))
}

// Método pop, remove o ultimo
func (oq *OrderQueue) Pop() interface{} {
	old := oq.Orders
	n := len(old)
	item := old[n-1]
	oq.Orders = old[0 : n-1]
	return item
}

func NewOrderQueue() *OrderQueue {
	return &OrderQueue{}
}
