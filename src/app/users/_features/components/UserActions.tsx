import { useDialogStore } from "@/store/dialog.store";
import { useUserStore } from "@/store/user.store";
import { UserResponseType } from "@/types/user.types";
import { useRouter, useSearchParams } from "next/navigation";

interface UserActionsProps extends UserResponseType {}

export default function UserActions(data: UserActionsProps) {
  const { setUser, setType } = useUserStore((store) => store);
  const { setDialog } = useDialogStore((store) => store);

  const handleEdit = () => {
    setUser(data);
    setType("EDIT");
  };

  const handleDelete = () => {
    setUser(data);
    setType("DELETE");
    setDialog("Are you sure want to delete this user?");
  };

  return (
    <div className="flex flex-row gap-3">
      <button
        type="button"
        className="text-gray-400 hover:text-gray-600 underline"
        onClick={handleEdit}
      >
        Edit
      </button>
      <button
        type="button"
        className="text-red-400 hover:text-red-600 underline"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
}
