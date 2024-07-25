import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AccountCardProps } from "@/types/accountInterfaces";
import AccountTransactionsHistory from "./AccountTransactionsHistory";
import { MdOutlineUpdate, MdOutlineCreateNewFolder } from "react-icons/md";
import Link from "next/link";

const AccountCard = ({ account, handleDelete }: AccountCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{account.name}</CardTitle>
        <CardDescription>{account.type}</CardDescription>
      </CardHeader>
      <CardContent>
        <AccountTransactionsHistory accountID={account.id} />
      </CardContent>
      <CardFooter className="flex flex-col w-full">
        {account.symbol != null && (
          <>
            <div className="flex justify-between w-full">
              <div>Symbole</div>
              <div>{account.symbol}</div>
            </div>
            <div className="flex justify-between w-full">
              <div>Nombre</div>
              <div>{account.number}</div>
            </div>
          </>
        )}
        <div className="flex justify-between w-full">
          <div className="font-bold">
            <p className="flex items-center">
              <MdOutlineCreateNewFolder />{" "}
              <span className="ml-2">{account.createdAt.toString()}</span>
            </p>
          </div>
          <div>{account.initialBalance} CHF</div>
        </div>
        <div className="flex justify-between w-full">
          <div className="font-bold">
            <p className="flex items-center">
              <MdOutlineUpdate />{" "}
              <span className="ml-2">{account.updatedAt.toString()}</span>
            </p>
          </div>
          <div>{account.actualBalance} CHF</div>
        </div>
        <div className="flex w-full gap-3 justify-between my-3">
          <Button variant="outline" className="w-1/3">
            Ajouter
          </Button>
          <Link href={`/account/modify/${account.id}`} className="w-1/3">
            <Button variant="outline" className="w-full">
              Modifier
            </Button>
          </Link>
          <Button
            variant="outline"
            className="w-1/3 bg-red-500 text-white"
            onClick={() => handleDelete(account.id)}
          >
            Supprimer
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default AccountCard;
