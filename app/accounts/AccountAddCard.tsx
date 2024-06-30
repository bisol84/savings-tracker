import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { MdAddCircleOutline } from "react-icons/md";

const AccountAddCard = () => {
  return (
    <Card>
      <CardContent>
        <div className="flex items-center justify-center h-44">
          <Link href={"/account/add"}>
            <MdAddCircleOutline size={30} />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default AccountAddCard;
