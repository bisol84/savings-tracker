import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MdAddCircleOutline } from "react-icons/md";

const AccountAddCard = () => {
  return (
    <Card>
      <CardContent>
        <div className="flex items-center justify-center h-44">
          <MdAddCircleOutline />
        </div>
      </CardContent>
    </Card>
  );
};

export default AccountAddCard;
