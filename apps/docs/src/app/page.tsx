import { db } from "@repo/database";

const Page = async (): Promise<JSX.Element> => {
  const users=await db.user.findMany();
  return <div className="bg-slate-900">{JSON.stringify(users)}</div>;
};

export default Page;
