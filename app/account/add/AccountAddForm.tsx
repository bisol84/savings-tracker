import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AccountTypeSelect from "./AccountTypeSelect";

const AccountAddForm = () => {
  return (
    <form action={"/api/v1/account"} method="POST">
      <div className="grid w-full max-w-sm items-center gap-3">
        <Label htmlFor="name">Nom</Label>
        <Input type="text" name="name" placeholder="Nom" />
        <Label htmlFor="type">Type de compte</Label>
        <AccountTypeSelect />
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
