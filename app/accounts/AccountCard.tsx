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
        <p className="text-xl">{account.initialBalance} CHF</p>
      </CardContent>
      <CardFooter>
        <p>{account.createdAt.toString()}</p>
      </CardFooter>
    </Card>
  );
};

export default AccountCard;
