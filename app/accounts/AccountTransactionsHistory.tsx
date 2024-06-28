import { AccountTransactionsProps } from "@/types/accountInterfaces";

const AccountTransactionsHistory = ({
  accountID,
}: AccountTransactionsProps) => {
  return (
    <div className="flex justify-between w-full">
      <div className="font-bold"></div>
      <div> CHF</div>
    </div>
  );
};

export default AccountTransactionsHistory;
