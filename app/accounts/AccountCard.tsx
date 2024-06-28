import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AccountCardProps } from "@/types/accountInterfaces";
import AccountTransactionsHistory from "./AccountTransactionsHistory";

const AccountCard = ({ account }: AccountCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{account.name}</CardTitle>
        <CardDescription>{account.type}</CardDescription>
      </CardHeader>
      <CardContent>
        <AccountTransactionsHistory accountID={account.id} />
      </CardContent>
      <CardFooter>
        <div className="flex justify-between w-full">
          <div className="font-bold">{account.createdAt.toString()}</div>
          <div>{account.initialBalance} CHF</div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default AccountCard;
