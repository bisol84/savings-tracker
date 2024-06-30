import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AccountModifyProps } from "@/types/accountInterfaces";

const AccountModifyForm = ({ account }: AccountModifyProps) => {
  return (
    <form action={`/api/v1/account/${account.id}`} method="POST">
      <div className="grid w-full max-w-sm items-center gap-3">
        <Label htmlFor="actual_balance">Montant actuel</Label>
        <Input
          type="text"
          name="actual_balance"
          defaultValue={account.actualBalance}
        />
        <Button variant="outline" type="submit">
          Envoyer
        </Button>
      </div>
    </form>
  );
};

export default AccountModifyForm;
