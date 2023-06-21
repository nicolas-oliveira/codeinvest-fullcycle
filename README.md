# Codeinvest

Código criado durante a semana de imersão Full Cycle

### Ordem de venda

```
{
	"order_id": "1",
	"investor_id": "Nicolas",
	"asset_id": "asset1",
	"current_shares": 10,
	"shares": 5,
	"price": 5.0,
	"order_type": "SELL"
}
```

### Ordem de Compra

```
{
	"investor_id": "Julio",
	"asset_id": "asset1",
	"current_shares": 0,
	"shares": 5,
	"price": 5.0,
	"order_type": "BUY"
}
```

### Transações

```
{
  "order_id": "1",
  "investor_id": "Nicolas",
  "asset_id": "asset1",
  "order_type": "SELL",
  "status": "CLOSED",
  "partial": 0,
  "shares": 5,
  "transactions": [
    {
      "transaction_id": "7d2d7574-04ff-40cf-951e-16ab9485fb29",
      "buyer_id": "",
      "seller_id": "1",
      "asset_id": "asset1",
      "price": 0,
      "shares": 5
    }
  ]
}
```

```
{
  "order_id": "",
  "investor_id": "Julio",
  "asset_id": "asset1",
  "order_type": "BUY",
  "status": "CLOSED",
  "partial": 0,
  "shares": 5,
  "transactions": [
    {
      "transaction_id": "7d2d7574-04ff-40cf-951e-16ab9485fb29",
      "buyer_id": "",
      "seller_id": "1",
      "asset_id": "asset1",
      "price": 0,
      "shares": 5
    }
  ]
}
```

### Acessar o admin do kafka

`localhost:9021`
Autorizar no `/etc/hosts` o `host.docker.internal`
