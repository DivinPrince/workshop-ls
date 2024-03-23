import { signOut } from "@/auth";

export const SignOut = () => {
  return (
    <button onClick={async () => {
      await signOut();
    }} className="p-2 px-3 text-sm rounded-md border text-white bg-slate-800">
      Sign out
    </button>
  );
};
