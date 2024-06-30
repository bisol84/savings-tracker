import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AccountModifyProps } from "@/types/accountInterfaces";

const AccountModifyForm = ({ account }: AccountModifyProps) => {
  const accountData = account[0];

  return (
    <form action={`/api/v1/account/${accountData.id}`} method="POST">
      <div className="grid w-full max-w-sm items-center gap-3">
        <Label htmlFor="actual_balance">Montant actuel</Label>
        <Input
          type="text"
          name="actual_balance"
          defaultValue={accountData.actualBalance}
        />
        <Button variant="outline" type="submit">
          Envoyer
        </Button>
      </div>
    </form>
  );
};

export default AccountModifyForm;
