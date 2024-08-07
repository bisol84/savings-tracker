"use client";

import { Account } from "@/types/accountInterfaces";
import AccountCard from "./AccountCard";
import AccountAddCard from "./AccountAddCard";
import useSWR from "swr";

const AccountCardGrid = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, isLoading, error, mutate } = useSWR(
    "/api/v1/accounts",
    fetcher
  );

  const handleDelete = async (id: number) => {
    await fetch(`/api/v1/account/${id}`, {
      method: "DELETE",
    });

    mutate();
  };

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
      {data.map((account: Account) => (
        <AccountCard
          key={account.id}
          account={account}
          handleDelete={handleDelete}
        />
      ))}
      <AccountAddCard />
    </div>
  );
};

export default AccountCardGrid;
