"use client";

import { createUser, deleteUser, updateUser } from "@/app/action/users.action";
import DeleteDialog from "@/components/dialog/DeleteDialog";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Radio from "@/components/ui/radio";
import { useDialogStore } from "@/store/dialog.store";
import { useToastStore } from "@/store/toast.store";
import { useUserStore } from "@/store/user.store";
import { OptionsType } from "@/types/form.types";
import { useState } from "react";

const genderOptions: OptionsType[] = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
];

const statusOptions: OptionsType[] = [
  {
    label: "Active",
    value: "active",
  },
  {
    label: "Inactive",
    value: "inactive",
  },
];
export default function UserForm() {
  const { user, type, setType, setUser } = useUserStore((store) => store);
  const { setToast } = useToastStore((store) => store);
  const { resetDialog } = useDialogStore((store) => store);

  const submitForm = async (formData: FormData) => {
    try {
      if (type === "CREATE") {
        await createUser(formData);
        resetForm();
        setToast({ title: "User has been created successfuly!" });
      }

      if (type === "EDIT") {
        await updateUser(user?.id as number, formData);
        resetForm();
        setToast({ title: "User has been updated!" });
      }
    } catch (error) {
      setToast({ title: "Failed!", type: "DANGER" });
    }
  };

  const resetForm = () => {
    setType("CREATE");
    setUser(undefined);
  };

  const handleDeleteUser = async () => {
    try {
      const res = await deleteUser(user?.id as number);
      setToast({ title: "User has been deleted!" });
      resetDialog();
    } catch (error) {
      setToast({ title: "Failed delete user!", type: "DANGER" });
    }
  };

  return (
    <>
      <div className="space-y-5">
        <h4 className="font-semibold text-base">
          {type === "CREATE" ? "Create User" : "Edit User"}
        </h4>

        <form
          className="flex flex-col gap-2"
          action={(formData) => {
            setType("CREATE");
            submitForm(formData);
          }}
        >
          <div className="grid grid-cols-2 gap-4 w-full">
            <Input
              label="Name"
              name="name"
              containerClass="w-full"
              placeholder="Full name..."
              defaultValue={user?.name}
              required
            />
            <Input
              type="email"
              label="Email"
              name="email"
              containerClass="w-full"
              placeholder="Email..."
              required
              defaultValue={user?.email}
            />
          </div>
          <Select
            options={genderOptions}
            label="Gender"
            name="gender"
            selected={
              genderOptions.find((gender) => gender.value)?.value as string
            }
            required
          />
          <Radio
            options={statusOptions}
            label="Status"
            name="status"
            defaultCheck={
              statusOptions.find((status) => status.value)?.value as string
            }
            required
          />

          <div className="flex justify-end">
            <button
              type="reset"
              className="text-red-500 hover:text-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={resetForm}
            >
              reset
            </button>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              {type === "CREATE" ? "Submit" : "Save"}
            </button>
          </div>
        </form>
      </div>
      <DeleteDialog onSubmit={handleDeleteUser} />
    </>
  );
}
