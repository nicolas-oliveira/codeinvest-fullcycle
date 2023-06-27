import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { InitTransactionDTO, InputExecuteTransactionDTO } from './order.dto';

@Controller('wallets/:wallet_id/orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  all(@Param('wallet_id') wallet_id: string) {
    return this.ordersService.all({ wallet_id });
  }

  @Post()
  initTransactionDTO(
    @Param('wallet_id') wallet_id: string,
    @Body() body: Omit<InitTransactionDTO, 'wallet_id'>,
  ) {
    return this.ordersService.initTransaction({ ...body, wallet_id });
  }

  @Post('execute')
  executeTransaction(
    @Param('wallet_id') wallet_id: string,
    @Body() body: InputExecuteTransactionDTO,
  ) {
    this.ordersService.executeTransaction(body);
  }
}
