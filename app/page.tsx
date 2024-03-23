import { redirect } from "next/navigation";

import { auth } from "@/auth";
import { logout } from "@/actions/auth";
import { getSubscription } from "@/data/subscription";

export default async function Home() {
  const session = await auth();
  const subscription: any = await getSubscription();

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="flex flex-col gap-y-4 border rounded-lg p-6">
        <div>
          <p><strong>Email: </strong>{session.user?.email}</p>
        </div>
        <div>
          <p><strong>Subscription: </strong>{subscription?.status || "None"}</p>
        </div>
        <form>
          <button className="p-2 px-3 text-sm rounded-md border text-white bg-slate-800">
            {subscription ? "Customer Portal" : "Upgrade"}
          </button>
        </form>
        <hr />
        <form action={logout}>
          <button type="submit" className="p-2 px-3 text-sm rounded-md border text-white bg-slate-800">
            Sign out
          </button>
        </form>
      </div>
    </div>
  );
};
