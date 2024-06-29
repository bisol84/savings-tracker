import { TransactionsHistoryProps } from "@/types/transactionInterfaces";
import { Transaction } from "@/types/transactionInterfaces";
import useSWR from "swr";

const AccountTransactionsHistory = ({
  accountID,
}: TransactionsHistoryProps) => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, isLoading, error } = useSWR(
    `/api/v1/transactions/${accountID}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div className="flex justify-between w-full">
      {data.map((transaction: Transaction) => (
        <>
          <div className="font-bold">{transaction.createdAt.toString()}</div>
          <div>{transaction.amount} CHF</div>
        </>
      ))}
    </div>
  );
};

export default AccountTransactionsHistory;
