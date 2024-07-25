export interface AccountCardProps {
  account: Account;
  handleDelete: (id: number) => Promise<void>;
}

export interface AccountTypeSelectProps {
  onChange: (id: string) => Promise<void>;
}

export interface AccountModifyProps {
  account: Account;
}

export interface Account {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  number: number;
  symbol: string;
  type: string;
  status: boolean;
  initialBalance: number;
  actualBalance: number;
}

export interface AccountTransactionsProps {
  accountID: number;
}

export interface MonthlyData {
  month: string;
  [key: string]: number | string | null;
}
