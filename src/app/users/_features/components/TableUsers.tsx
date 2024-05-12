"use client";

import Table from "@/components/table/Table";
import Input from "@/components/ui/Input";
import { userColumns } from "../columns/userColumns";
import { useSearchParams, useRouter, useParams } from "next/navigation";
import { debounce } from "@/helpers/utils";

interface TableUserProps<T = Record<string, unknown>> {
  data: T[];
}

export default function TableUsers({ data }: TableUserProps) {
  const searchParams = useSearchParams();
  const params = useParams();
  const router = useRouter();

  const handleCreateUrl = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("name", value);
    params.set("page", "1");
    params.set("per_page", "5");

    router.replace(`/users?${params.toString()}`);
  };

  const handleDebouncedSearch = debounce(handleCreateUrl, 800);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white flex justify-between">
        <span className="block">Users List</span>
        <Input
          name="search"
          placeholder="Search user..."
          onChange={(event) => handleDebouncedSearch(event.target.value)}
          defaultValue={searchParams.get("name") || ""}
        />
      </div>
      <Table columns={userColumns} data={data} />
    </div>
  );
}
