export interface AccountCardProps {
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
}
