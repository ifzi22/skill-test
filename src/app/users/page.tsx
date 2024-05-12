import TableUsers from "./_features/components/TableUsers";
import { ParamsType } from "@/types/params.types";
import UserForm from "./_features/components/UserForm";
import { getUsers } from "../action/users.action";
import Toast from "@/components/toast/Toast";

export default async function Users({
  searchParams,
}: {
  searchParams: ParamsType;
}) {
  const params: ParamsType = Object.keys(searchParams).length
    ? searchParams
    : { name: "", page: "1", per_page: "5" };

  const getUsersList = await getUsers(params);
  return (
    <main className="space-y-10 mt-10">
      <div className="bg-white p-6 max-w-screen-sm mx-auto">
        <UserForm />
      </div>
      <div className="max-w-screen-lg mx-auto">
        <TableUsers data={getUsersList} />
      </div>

      <Toast />
    </main>
  );
}
