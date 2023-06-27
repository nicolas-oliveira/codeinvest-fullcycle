// Data Transfer Object
import { OrderType } from '@prisma/client';

export class InitTransactionDTO {
  asset_id: string;
  wallet_id: string;
  shares: number;
  type: OrderType;
  price: number;
}

export class InputExecuteTransactionDTO {
  order_id: string;
  status: 'OPEN' | 'CLOSED';
  related_investor_id: string;
  broker_transaction_id: string;
  negotiated_shares: number;
  price: number;
}
