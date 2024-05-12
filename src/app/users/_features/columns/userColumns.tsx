import { Columns } from "@/components/table/Table";
import { cn } from "@/helpers/utils";
import { UserResponseType } from "@/types/user.types";
import UserActions from "../components/UserActions";

export const userColumns: Columns<UserResponseType>[] = [
  {
    title: "#",
  },
  {
    id: "name",
    title: "Name",
  },
  {
    id: "email",
    title: "Email",
  },
  {
    id: "gender",
    title: "Gender",
  },
  {
    id: "status",
    title: "Status",
    render: (data) => {
      const red = "bg-red-100 text-red-500";
      const green = "bg-green-100 text-green-500";

      return (
        <div
          className={cn(
            "py-1 px-4 rounded-full text-center text-sm",
            data.status === "active" ? green : red
          )}
        >
          {data.status}
        </div>
      );
    },
  },
  {
    title: "Action",
    render: UserActions,
  },
];
