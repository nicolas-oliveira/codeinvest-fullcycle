# Codeinvest

Codeinvest é uma plataforma full cycle criada na semana de Imersão Full Cycle que aconteceu entre os dias 19/06 até 23/06, onde criamos entidades, filas com kafka, back-end e front-end de um Home Broker capaz de lidar com milhões de requisições.

### Comandos úteis

#### Acessando o terminal

Para acessar o terminal do docker basta utilizar o comando `make sh [...]` onde [...] representa o ambiente que você está buscando como "`go`" ou "`nest`"

#### Subindo o docker

Para subir o ambiente basta utilizando o comando `make up [...]` onde [...] representa o ambiente que você está buscando como "go" ou "nest"

### Acessar o admin do kafka

`localhost:9021`
Autorizar no `/etc/hosts` o `host.docker.internal`

```
make go
```

### Acessa Prisma studio

Depois de ter subido os ambientes, acesse primeiro o terminal dentro do docker nest:

```
make sh nest
```

Código criado durante a semana de imersão Full Cycle

# Exemplos de requisição

## Transações com o Golang

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

### Criação de carteiras e ações com NestJS

Para ver as requições vá até o arquivo `./home-broker-nestjs/api.http` e baixe a extenção "REST Client". Execute o projeto e no arquivo mesmo você poderá testar as requisições
