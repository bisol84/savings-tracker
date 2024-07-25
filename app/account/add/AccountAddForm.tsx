"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AccountTypeSelect from "./AccountTypeSelect";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

const handleForm = async (
  e: FormEvent<HTMLFormElement>,
  router: ReturnType<typeof useRouter>
) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);

  const response = await fetch(e.currentTarget.action, {
    method: "POST",
    body: formData,
  });

  if (response.ok) {
    router.push("/accounts");
  }
};

const AccountAddForm = () => {
  const router = useRouter();
  const [accountType, setAccountType] = useState("");

  const handleAccountTypeChange = async (id: string): Promise<void> => {
    setAccountType(id);
    return Promise.resolve();
  };

  return (
    <form action={"/api/v1/account"} onSubmit={(e) => handleForm(e, router)}>
      <div className="grid w-full max-w-sm items-center gap-3">
        <Label htmlFor="name">Nom</Label>
        <Input type="text" name="name" placeholder="Nom" />
        <Label htmlFor="type">Type de compte</Label>
        <AccountTypeSelect onChange={handleAccountTypeChange} />
        {(accountType === "stock" || accountType === "crypto") && (
          <>
            <Label htmlFor="symbol">Symbole</Label>
            <Input type="text" name="symbol" />
            <Label htmlFor="number">Nombre</Label>
            <Input type="number" name="number" placeholder="0" />
          </>
        )}
        <Label htmlFor="initial_balance">Montant initial</Label>
        <Input type="number" name="initial_balance" placeholder="0" />
        <Button variant="outline" type="submit">
          Ajouter
        </Button>
      </div>
    </form>
  );
};

export default AccountAddForm;
