export interface AccountCardProps {
  account: Account;
  handleDelete: (id: number) => Promise<void>;
}

export interface AccountModifyProps {
  account: Account;
}

export interface Account {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  type: string;
  status: boolean;
  initialBalance: number;
  actualBalance: number;
}

export interface AccountTransactionsProps {
  accountID: number;
}
