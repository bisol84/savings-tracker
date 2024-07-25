import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AccountTypeSelectProps } from "@/types/accountInterfaces";

const AccountTypeSelect = ({ onChange }: AccountTypeSelectProps) => {
  return (
    <Select name="type" onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue placeholder="Type" />
      </SelectTrigger>
      <SelectContent className="bg-white">
        <SelectItem value="2p">2ème pilier</SelectItem>
        <SelectItem value="3a">3ème pilier A</SelectItem>
        <SelectItem value="3b">3ème pilier B</SelectItem>
        <SelectItem value="stock">Bourse</SelectItem>
        <SelectItem value="crypto">Crypto</SelectItem>
        <SelectItem value="bank">Compte bancaire</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default AccountTypeSelect;
