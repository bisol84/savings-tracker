import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AccountTypeSelect = () => {
  return (
    <Select name="type">
      <SelectTrigger>
        <SelectValue placeholder="Type" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="2p">2ème pilier</SelectItem>
        <SelectItem value="3a">3ème pilier A</SelectItem>
        <SelectItem value="3b">3ème pilier B</SelectItem>
        <SelectItem value="bourse">Bourse</SelectItem>
        <SelectItem value="crypto">Crypto</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default AccountTypeSelect;
