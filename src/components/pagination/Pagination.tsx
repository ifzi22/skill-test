"use client";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/helpers/utils";
import Link from "next/link";

export default function Pagination() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    params.set("per_page", "5");

    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex gap-4 items-center justify-end">
      <Link
        href={createPageURL(currentPage - 1)}
        className={cn(
          "text-white py-2.5 px-4 rounded-md",
          currentPage <= 1
            ? "bg-blue-300/80 hover:bg-blue-300 pointer-events-none cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        )}
      >
        <FaChevronLeft />
      </Link>
      <Link
        href={createPageURL(currentPage + 1)}
        className="text-white py-2.5 px-4 bg-blue-500 hover:bg-blue-600 rounded-md"
      >
        <FaChevronRight />
      </Link>
    </div>
  );
}
