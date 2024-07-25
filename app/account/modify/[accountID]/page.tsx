import AccountModifyForm from "./AccountModifyForm";

export const dynamic = "force-dynamic";
export const revalidate = 5;

async function getAccount(accountID: string) {
  const response = await fetch(
    process.env.URL + `/api/v1/account/${accountID}`,
    {}
  );
  return response.json();
}

const page = async ({ params }: { params: { accountID: string } }) => {
  const accountID = params.accountID;
  const account = await getAccount(accountID);

  return (
    <section className="p-3">
      <AccountModifyForm account={account} />
    </section>
  );
};

export default page;
