import useQueryTable from "@/app/hooks/useQueryTable";
import { cn } from "@/helpers/utils";
import { useParams, useSearchParams } from "next/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export type Columns<T = Record<string, unknown>> = {
  id?: keyof T;
  title: string;
  className?: string;
  render?: (data: T) => React.ReactElement | React.ReactNode;
};

interface TableProps<T = Record<string, unknown>> {
  columns: Columns<T>[];
  data: Record<string, unknown>[];
}

export default function Table<T = Record<string, unknown>>({
  columns,
  data,
}: TableProps<T>) {
  const { paginations } = useQueryTable();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  return (
    <div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-5">
          <tr>
            {columns.map((column, i) => (
              <th
                key={i}
                scope="col"
                className={cn("px-6 py-3", column.className)}
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i} className="bg-white border-b">
              {columns.map((col, j) => (
                <td key={j} className="px-6 py-4">
                  {col.render
                    ? col.render(item as T)
                    : (item?.[col.id as string] as string)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex mt-5 justify-end gap-4 p-6">
        <button
          type="button"
          disabled={currentPage <= 1}
          className="text-gray-600 disabled:text-gray-400"
          onClick={() => paginations(currentPage - 1)}
        >
          <FaChevronLeft />
        </button>
        <span className="text-gray-600">{currentPage}</span>
        <button
          type="button"
          className="text-gray-600"
          onClick={() => paginations(currentPage + 1)}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
