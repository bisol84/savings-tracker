export interface Transaction {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  amount: number;
}

export interface TransactionsHistoryProps {
  accountID: number;
}
