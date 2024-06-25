import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AccountCardProps } from "@/types/accountInterfaces";

const AccountCard = ({ account }: AccountCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{account.name}</CardTitle>
        <CardDescription>{account.type}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between">
          <div className="font-bold">{account.createdAt.toString()}</div>
          <div>{account.initialBalance} CHF</div>
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default AccountCard;
