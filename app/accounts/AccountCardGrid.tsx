"use client";

import { Account } from "@/types/accountInterfaces";
import AccountCard from "./AccountCard";
import AccountAddCard from "./AccountAddCard";
import useSWR from "swr";

const AccountCardGrid = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, isLoading, error } = useSWR("/api/v1/accounts", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div className="grid grid-cols-4 gap-4">
      {data.map((account: Account) => (
        <AccountCard key={account.id} account={account} />
      ))}
      <AccountAddCard />
    </div>
  );
};

export default AccountCardGrid;
