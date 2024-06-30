import AccountModifyForm from "./AccountModifyForm";

export const dynamic = "force-dynamic";
export const revalidate = 0;

async function getAccount(accountID: string) {
  const res = await fetch(process.env.URL + `/api/v1/account/${accountID}`, {});
  console.log("API : " + res.json);
  return res.json();
}

const page = async ({ params }: { params: { accountID: string } }) => {
  const accountID = params.accountID;
  console.log("Account ID : " + accountID);
  const account = await getAccount(accountID);
  console.log(account);

  return (
    <section className="p-3">
      <AccountModifyForm account={account} />
    </section>
  );
};

export default page;
